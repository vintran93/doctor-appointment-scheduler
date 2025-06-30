import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:8000/api';

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      console.log('Full Redux state:', state);
      console.log('Auth state:', state.auth);
      
      // Check if auth state exists and has token
      if (!state.auth || !state.auth.token) {
        console.log('No auth token found!');
        return rejectWithValue('No authentication token available');
      }
      
      const { token } = state.auth;
      
      // Check if token looks valid (basic check)
      if (!token || token === 'undefined' || token === 'null') {
        console.log('Invalid token format!');
        return rejectWithValue('Invalid authentication token');
      }
      
      console.log('Using token:', token);
      
      const response = await fetch(`${API_URL}/doctors/`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.log('Error response:', errorData);
        return rejectWithValue(`HTTP ${response.status}: ${errorData}`);
      }
      
      const data = await response.json();
      console.log('Doctors data received:', data);
      return data;
      
    } catch (error) {
      console.error('fetchDoctors error:', error);
      return rejectWithValue(error.message);
    }
  }
);

const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        console.log('fetchDoctors rejected:', action.payload);
      });
  },
});

export default doctorSlice.reducer;