// frontend/src/store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/accounts'; // Django routes we added

// ------------------------------------------------------------------
// ASYNC THUNKS
// ------------------------------------------------------------------
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/login/`, { email, password });
      // { user, access, refresh }
      localStorage.setItem('token', res.data.access);
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.detail || err.message || 'Login failed';
      return rejectWithValue(message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/register/`, formData);
      // { user, access, refresh }
      localStorage.setItem('token', res.data.access);
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.detail || err.message || 'Registration failed';
      return rejectWithValue(message);
    }
  }
);

// ------------------------------------------------------------------
// INITIAL STATE
// ------------------------------------------------------------------
const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  refresh: null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

// ------------------------------------------------------------------
// SLICE
// ------------------------------------------------------------------
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.refresh = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ---------------- REGISTER ----------------
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refresh = action.payload.refresh;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---------------- LOGIN ----------------
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.refresh = action.payload.refresh;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;