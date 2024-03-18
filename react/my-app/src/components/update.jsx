import React, { useState, useEffect ,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const [title, settitle] = useState('');
  const [image, setImage] = useState(null);
  const { id } = useParams(); // Get the ID from the route parameters
  const navigate = useNavigate();

  const loadproducts = async ()=>{
    const {data}= await axios.get(`http://localhost:8000/api/list/${id}/`);
    settitle(data.title)
    setImage(data.image)
  }

  useEffect(()=>{
    loadproducts()
  },[])
  
  const updateprodructinfo =async()=>{
    let formField = new FormData()
    formField.append('title',title)
    if(image !== null){
        formField.append('image',image)
    }
    await axios({
        method: 'put',
        url: `http://localhost:8000/api/list/${id}/`,
        data: formField
    }).then(response=>{
        navigate('/')
    })
  }

  const handleTextChange = (e) => {
    settitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='form-group'>
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update My Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><input type='text' value={title} onChange={handleTextChange} /></p>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateprodructinfo} >Update</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

    </div>
  );
};

export default UpdatePage;
