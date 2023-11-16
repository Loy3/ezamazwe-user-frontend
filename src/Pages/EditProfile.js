//Profile Setup

import React from 'react';
import { useState, useEffect } from 'react';
import { ProfileUpdateFunction } from '../Services/AuthService';
import { UploadImageFunction } from '../Services/AuthService';
import { GetUserDataFunction } from '../Services/AuthService';
import { useLocation, Link } from 'react-router-dom';

const EditProfile = ({ user }) => {

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


  const handleGetUserData = async () => {
    try {
      const user = await GetUserDataFunction(userId);
      console.log("User data fetched on EditProfile component", user);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhoneNum(user.phoneNum);
      setImageURL(user.imageURL);

    } catch (error) {
      console.log("Error fetching data on EditProfile component", error);
    }
  }

  const handleUploadImage = async () => {
    try {
      const image_url = await UploadImageFunction(imageUpload);
      setImageURL(image_url);
    } catch (error) {
      console.error("Error in UploadImageFunction:", error);
    }
  };

  const handleEdit = async () => {
    try {
      if (!firstName || !lastName || !userEmail || !phoneNum) {
        return alert('Warning', 'All fields are required!');
      }
      ProfileUpdateFunction(userId, firstName, lastName, userEmail, phoneNum, imageURL);
    
    } catch (error) {
      console.log("Unable to update profile", error);
    }
   
  };

  return (
    <div>
      <br></br>
      <h2> Profile</h2>
      <button onClick={handleGetUserData}>
        <h5>View & Edit Profile</h5>
      </button>
      <br></br>
      <br></br>
      <label>Insert Image: </label>
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])} />
      <button onClick={handleUploadImage}>Upload</button>
      <br></br>
      <br></br>
      <input type="text" placeholder="Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" placeholder="Surname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br></br>
      <br></br>
      <input type="text" placeholder="Phone" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
      <br></br>
      <br></br>
      <input type="email" placeholder="Email" value={userEmail} onChange={(e) => setEmail(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={handleEdit}>Confirm</button>
      <br></br>
      <br></br>
      <Link to='/resetpassword'>Reset Password</Link>
    </div>
  );
};

export default EditProfile;

