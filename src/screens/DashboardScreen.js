import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardScreen = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.get('http://localhost:5000/api/auth/profile', config);
        setUser(data);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default DashboardScreen;
