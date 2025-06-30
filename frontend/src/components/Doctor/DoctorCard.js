// frontend/src/components/Doctor/DoctorCard.js
import React from 'react';

const DoctorCard = ({ doctor, onSelect }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    {doctor.image && (
      <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    )}
    <h3 className="text-xl font-semibold text-center mb-2">Dr. {doctor.name}</h3>
    <p className="text-blue-600 text-center mb-2">{doctor.specialty}</p>
    <p className="text-gray-600 text-sm mb-2">{doctor.education}</p>
    <p className="text-gray-500 text-sm mb-4">{doctor.address}</p>
    <button
      onClick={() => onSelect(doctor)}
      className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Schedule Appointment
    </button>
  </div>
);

export default DoctorCard;