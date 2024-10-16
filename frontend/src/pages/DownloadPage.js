import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

const DownloadPage = () => {
  const handleDownload = (format) => {
    // Implement download logic
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Downloading Files
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please select the format to download the results.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          sx={{ m: 1 }}
          onClick={() => handleDownload('csv')}
        >
          CSV
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          sx={{ m: 1 }}
          onClick={() => handleDownload('excel')}
        >
          Excel
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          sx={{ m: 1 }}
          onClick={() => handleDownload('pdf')}
        >
          PDF
        </Button>
      </Box>
    </Container>
  );
};

export default DownloadPage;
