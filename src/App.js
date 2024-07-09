import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/' element={<LoginScreen />} />
        <Route path='/dashboard' element={<DashboardScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
