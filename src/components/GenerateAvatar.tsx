"use client"

import React, { useState, useEffect } from 'react';

const AvatarGenerator = () => {
  const [userName, setUserName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  // Fetch user data from the database (replace 'API_ENDPOINT' with your actual API endpoint)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response : any = await fetch('API_ENDPOINT');
        const userData = response.data; // Assuming the API returns an object with the user's data
        const firstLetter = userData.name.charAt(0).toUpperCase();
        const avatarUrl = generateAvatarUrl(firstLetter);
        setAvatarUrl(avatarUrl);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);

  // Function to generate the avatar URL (You can use any avatar service or even generate a URL locally)
  const generateAvatarUrl = (letter: string) => {
    // Replace this with your actual avatar generation logic or use an avatar service API
    // For simplicity, we're using a placeholder URL with the first letter in the background color
    const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return `https://via.placeholder.com/200/${bgColor}/ffffff?text=${letter}`;
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <img
        src={avatarUrl}
        alt="User Avatar"
        width="200"
        height="200"
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default AvatarGenerator;
