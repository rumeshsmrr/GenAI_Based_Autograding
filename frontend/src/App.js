import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadForm from './pages/UploadForm';
import LoadingPage from './pages/LoadingPage';
import StudentResult from './pages/StudentResult';
import DownloadPage from './pages/DownloadPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<UploadForm />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/student-result" element={<StudentResult />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
