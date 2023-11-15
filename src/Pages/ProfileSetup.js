//Profile Setup

import React from 'react';
import { useState, useEffect } from 'react';
import { ProfileSetupFunction } from '../Services/AuthService';
import { UploadImageFunction } from '../Services/AuthService';
import { useLocation } from 'react-router-dom';

const ProfileSetup = ({ user }) => {

  const location = useLocation();
  const userData = location.state.user;
  console.log("User:", userData);

  const [userEmail, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [userId, setUserId] = useState(userData);


  const handleUploadImage = async () => {

    try {
      const image_url = await UploadImageFunction(imageUpload);
      setImageURL(image_url);
    } catch (error) {
      console.error("Error in UploadImageFunction:", error);
    }
  };

  const handleSignup = async () => {
    ProfileSetupFunction(userId, firstName, lastName, userEmail, phoneNum, imageURL);
  };

  return (
    <div>
      <br></br>
      <h2>Create Profile</h2>
      <br></br>
      <br></br>
      <label>Insert Image: </label>
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])} />
      <button onClick={handleUploadImage}>Upload</button>
      <br></br>
      <br></br>
      <input type="text" placeholder="Name" onChange={(e) => setFirstName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" placeholder="Surname" onChange={(e) => setLastName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" placeholder="Phone" onChange={(e) => setPhoneNum(e.target.value)} />
      <br></br>
      <br></br>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={handleSignup}>Confirm</button>
    </div>
  );
};

export default ProfileSetup;

