import React, { useState } from "react";
import { Container, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box } from "@mui/material";

const UploadForm = () => {
  const [moduleName, setModuleName] = useState("Software Engineering");
  const [moduleCode, setModuleCode] = useState("SE4030");
  const [batch, setBatch] = useState("Regular");
  const [academicYear, setAcademicYear] = useState("4");
  const [semester, setSemester] = useState("1");
  const [markingGuide, setMarkingGuide] = useState(null);
  const [studentAnswers, setStudentAnswers] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Details
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Module Name</InputLabel>
          <Select value={moduleName} onChange={(e) => setModuleName(e.target.value)} label="Module Name">
            <MenuItem value="Software Engineering">Software Engineering</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Module Code</InputLabel>
          <Select value={moduleCode} onChange={(e) => setModuleCode(e.target.value)} label="Module Code">
            <MenuItem value="SE4030">SE4030</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Batch</InputLabel>
          <Select value={batch} onChange={(e) => setBatch(e.target.value)} label="Batch">
            <MenuItem value="Regular">Regular</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Academic Year</InputLabel>
          <Select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} label="Academic Year">
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Semester</InputLabel>
          <Select value={semester} onChange={(e) => setSemester(e.target.value)} label="Semester">
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label">
            Choose Marking Guide
            <input type="file" hidden onChange={(e) => setMarkingGuide(e.target.files[0])} />
          </Button>
          {markingGuide && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected File: {markingGuide.name}
            </Typography>
          )}
          <Button variant="contained" color="secondary" sx={{ ml: 2 }} disabled={!markingGuide}>
            Upload
          </Button>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label">
            Choose Student Answers
            <input type="file" hidden onChange={(e) => setStudentAnswers(e.target.files[0])} />
          </Button>
          {studentAnswers && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected File: {studentAnswers.name}
            </Typography>
          )}
          <Button variant="contained" color="secondary" sx={{ ml: 2 }} disabled={!studentAnswers}>
            Upload
          </Button>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 4, mb: 6 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default UploadForm;
