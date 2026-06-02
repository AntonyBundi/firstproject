const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Please fill in all fields.' });
  }

  console.log('New contact submission:', { name, email, message });

  res.json({ success: true, message: 'Thank you! Your message has been received.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'first.html'));
});

app.listen(port, () => {
  console.log(`Victory Wave Academy server is running at http://localhost:${port}`);
});
