// frontend/src/pages/Appointments.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../store/slices/appointmentSlice';

const Appointments = () => {
  const { list: appointments, loading } = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  if (loading) return <div className="text-center">Loading appointments...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Appointments</h2>
      {appointments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No appointments scheduled yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {appointments.map(appointment => (
            <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Dr. {appointment.doctor_details?.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{appointment.doctor_details?.specialty}</p>
                  <div className="text-gray-600">
                    <p><strong>Date:</strong> {appointment.date}</p>
                    <p><strong>Time:</strong> {appointment.time}</p>
                    <p><strong>Address:</strong> {appointment.doctor_details?.address}</p>
                    {appointment.notes && (
                      <p><strong>Notes:</strong> {appointment.notes}</p>
                    )}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : appointment.status === 'cancelled'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;