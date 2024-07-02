import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import {fetchPutDataWithAuth, fetchGetDataWithAuth} from 'client/client';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const EditAlbumForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const album_id = queryParams.get('id'); // Extract album ID from URL query parameters
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('token');
        if (!isLoggedIn) {
          navigate('/login');
          window.location.reload()
        } 
      
        fetchGetDataWithAuth("/albums/"+album_id)
        .then(res =>{
          if (res.data){
            setFormData(prevFormData => ({
              ...prevFormData,
              name:res.data.name,
              description: res.data.description
            }))
          }

        })
      }, []); 

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

      fetchPutDataWithAuth("/albums/"+album_id+"/update",payload)
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
        Edit Album
      </Button>
    </form>
  );
};

export default EditAlbumForm;
