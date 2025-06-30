// frontend/src/pages/Dashboard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import DoctorList from '../components/Doctor/DoctorList';
import AppointmentForm from '../components/Appointment/AppointmentForm';
import Appointments from './Appointments';

const Dashboard = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [activeTab, setActiveTab] = useState('doctors');
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Doctor Appointment Scheduler</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'doctors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Find Doctors
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'appointments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Appointments
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'doctors' && (
          <>
            <h2 className="text-xl font-semibold mb-6">Available Doctors</h2>
            <DoctorList onDoctorSelect={setSelectedDoctor} />
          </>
        )}
        {activeTab === 'appointments' && <Appointments />}
      </main>

      {selectedDoctor && (
        <AppointmentForm
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;