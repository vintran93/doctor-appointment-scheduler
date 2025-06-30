// frontend/src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import doctorSlice from './slices/doctorSlice';
import appointmentSlice from './slices/appointmentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctors: doctorSlice,
    appointments: appointmentSlice,
  },
});