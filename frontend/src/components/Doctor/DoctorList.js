// // frontend/src/components/Doctor/DoctorList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDoctors } from '../../store/slices/doctorSlice';
// import DoctorCard from './DoctorCard';

// const DoctorList = ({ onDoctorSelect }) => {
//   // Get data from Redux with fallback to empty array
//   const { list: doctors = [], loading = false, error = null } = useSelector(state => state.doctors || {});
//   const dispatch = useDispatch();

//   // Debug logging
//   console.log('Redux state:', useSelector(state => state.doctors));
//   console.log('doctors:', doctors, 'loading:', loading, 'error:', error);

//   useEffect(() => {
//     console.log('Dispatching fetchDoctors...');
//     dispatch(fetchDoctors());
//   }, [dispatch]);

//   if (loading) return <div className="text-center">Loading doctors...</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {doctors && doctors.length > 0 ? (
//         doctors.map(doctor => (
//           <DoctorCard key={doctor.id} doctor={doctor} onSelect={onDoctorSelect} />
//         ))
//       ) : (
//         <div className="text-center col-span-full">No doctors available</div>
//       )}
//     </div>
//   );
// };

// export default DoctorList;

// frontend/src/components/Doctor/DoctorList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../store/slices/doctorSlice';
import DoctorCard from './DoctorCard';

const DoctorList = ({ onDoctorSelect }) => {
  // Get data from Redux with fallback to empty array
  const { list: doctors = [], loading = false, error = null } = useSelector(state => state.doctors || {});
  const dispatch = useDispatch();

  // Debug logging
  console.log('Redux state:', useSelector(state => state.doctors));
  console.log('doctors:', doctors, 'loading:', loading, 'error:', error);

  useEffect(() => {
    console.log('Dispatching fetchDoctors...');
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (loading) return <div className="text-center">Loading doctors...</div>;

  // Handle authentication errors
  if (error && error.includes('token')) {
    return (
      <div className="text-center">
        <p>Please log in to view doctors.</p>
        {/* Add your login button/link here */}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors && doctors.length > 0 ? (
        doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} onSelect={onDoctorSelect} />
        ))
      ) : (
        <div className="text-center col-span-full">No doctors available</div>
      )}
    </div>
  );
};

export default DoctorList;