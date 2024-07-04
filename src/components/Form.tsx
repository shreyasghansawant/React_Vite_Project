import React, { useState } from 'react';
import { TextField, Button, Typography, Card, Link } from '@mui/material';
import '../styles/Form.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data saved to localStorage!');
  };

  return (
    <div className='mainDiv'>
        <img 
            src="https://www.growmeorganic.com/wp-content/uploads/2020/05/GrowMeOrganicLogo-e1589337030567.png" 
            alt="company logo" 
            width="350"
            className='logo'
        />
        <Card
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: 4,
                width: 400,
                margin: '0 auto'
            }}
            onSubmit={handleSubmit}
        >
        <Typography variant="h5" component="h1">
            User Information
        </Typography>
        <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
        />
        <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
        />
        <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
        </Button>
        <div className='links'>
            <Link href="/posts" underline="hover">
                View Posts<br/>Task Component 1
            </Link>
            <Link href="/departments" underline="hover">
                View Departments<br/>Task Component 2
            </Link>
        </div>
        </Card>
        
    </div>
  );
};

export default Form;
