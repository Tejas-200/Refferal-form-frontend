// src/components/Overlay.js
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const OverlayBox = styled(Box)(({ opacity }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  zIndex: 1000,
}));

const Overlay = ({ open, opacity = 0.5 }) => {
  if (!open) return null;
  return <OverlayBox opacity={opacity} />;
};

export default Overlay;
