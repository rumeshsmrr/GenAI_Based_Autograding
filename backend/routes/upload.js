const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/marking-guide', upload.single('markingGuide'), (req, res) => {
  // Handle marking guide file
  res.json({ message: 'Marking guide uploaded successfully' });
});

router.post('/student-answers', upload.single('studentAnswers'), (req, res) => {
  // Handle student answers file
  res.json({ message: 'Student answers uploaded successfully' });
});

module.exports = router;
