// frontend/src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const { token } = useSelector(state => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      {token ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;