// frontend/src/store/slices/appointmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:8000/api';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async (_, { getState }) => {
    const { token } = getState().auth;
    const response = await fetch(`${API_URL}/appointments/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }
);

export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointmentData, { getState }) => {
    const { token } = getState().auth;
    const response = await fetch(`${API_URL}/appointments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(appointmentData),
    });
    return response.json();
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default appointmentSlice.reducer;