import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import {fetchPutDataWithAuth} from 'client/client';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const EditPhotoForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const album_id = queryParams.get('album_id');
    const photo_id = queryParams.get('photo_id');
    const photo_name = queryParams.get('photo_name');
    let photo_desc = queryParams.get('photo_desc');


    useEffect(() => {
        const isLoggedIn = localStorage.getItem('token');
        if (!isLoggedIn) {
          navigate('/login');
          window.location.reload()
        } 
        if (photo_desc == 'null'){
          photo_desc = ""
        }
        setFormData(prevFormData => ({
          ...prevFormData,
          name: photo_name,
          description: photo_desc
        }));
      }, [navigate]); 

    const [formData, setFormData] = useState({
    name: '',
    description: '',
    });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;
    const newErrors = { name: '', description: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);

    // If form is valid, you can proceed with further actions
    if (isValid) {
        const payload = {
            name: formData.name,
            description: formData.description,
          };

      fetchPutDataWithAuth("/albums/"+album_id+"/photos/"+photo_id+"/update",payload)
      .then((response) => {
        console.log(response)
       
        
      }) .catch((error) => {
          console.error('Login error:', error);
    });
      console.log('Form submitted:');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        error={!!errors.description}
        helperText={errors.description}
        multiline
        rows={4}
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Edit Photo
      </Button>
    </form>
  );
};

export default EditPhotoForm;
