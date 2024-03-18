import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'; // Import useHistory from React Router
import { Link } from 'react-router-dom';

export default function Linkk() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const navigate  = useNavigate() // Initialize useHistory hook

  const addDataList = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', image);

      const response = await axios.post('http://localhost:8000/api/list/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Data added successfully:', response.data);
      // Redirect to the home page after successfully adding data
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

//   const handleTextChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><input type='text' onChange={(e)=>setTitle(e.target.value)} /></p>
          <label>Image:</label>
          <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}/>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={addDataList}>Add Data</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
