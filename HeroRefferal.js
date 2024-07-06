// src/components/ReferralModal.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ModalBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '16px',
  boxShadow: 24,
  zIndex: 1001, // Ensure the modal is above the overlay
  borderRadius: '8px', // Optional: rounded corners
});

const ReferralModal = ({ open, handleClose }) => {
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const [errors, setErrors] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name) && name.length > 2;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) && email.endsWith('.com');
  };

  const handleSubmit = () => {
    let valid = true;
    let errors = {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    };

    if (!validateName(form.referrerName)) {
      errors.referrerName = 'Name must contain only letters and spacesand longer than 2 characters.';
      valid = false;
    }

    if (!validateEmail(form.referrerEmail)) {
      errors.referrerEmail = 'Email must be valid and end with .com.';
      valid = false;
    }

    if (!validateName(form.refereeName)) {
      errors.refereeName = 'Name must contain only letters and spaces and longer than 2 characters.';
      valid = false;
    }

    if (!validateEmail(form.refereeEmail)) {
      errors.refereeEmail = 'Email must be valid and end with .com.';
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      // Add form submission logic here
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <Typography variant="h5" sx={{ color: 'blue', marginBottom: '16px' }}>
          Refer a Friend
        </Typography>
        <TextField
          label="Your Name"
          name="referrerName"
          value={form.referrerName}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: '16px' }}
          error={!!errors.referrerName}
          helperText={errors.referrerName}
        />
        <TextField
          label="Your Email"
          name="referrerEmail"
          value={form.referrerEmail}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: '16px' }}
          error={!!errors.referrerEmail}
          helperText={errors.referrerEmail}
        />
        <TextField
          label="Friend's Name"
          name="refereeName"
          value={form.refereeName}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: '16px' }}
          error={!!errors.refereeName}
          helperText={errors.refereeName}
        />
        <TextField
          label="Friend's Email"
          name="refereeEmail"
          value={form.refereeEmail}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: '16px' }}
          error={!!errors.refereeEmail}
          helperText={errors.refereeEmail}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </ModalBox>
    </Modal>
  );
};

export default ReferralModal;
