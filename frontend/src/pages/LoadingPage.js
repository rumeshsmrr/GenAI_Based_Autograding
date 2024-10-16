import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'We Are Generating Results For You...';
  const typingSpeed = 100; // milliseconds per character
  const resetDelay = 1000; // delay before restarting the animation

  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const typeText = () => {
      if (isMounted) {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          index++;
          setTimeout(typeText, typingSpeed);
        } else {
          // Wait for a while before resetting
          setTimeout(() => {
            setDisplayedText('');
            index = 0;
            setTimeout(typeText, typingSpeed);
          }, resetDelay);
        }
      }
    };

    typeText();

    return () => {
      isMounted = false; // Cleanup to prevent state updates after unmounting
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Full viewport height
        textAlign: 'center',
      }}
    >
      <CircularProgress size={80} />
      <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold' }}>
        {displayedText}
      </Typography>
    </Box>
  );
};

export default LoadingPage;
