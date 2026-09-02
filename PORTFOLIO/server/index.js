const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/portfolio', (req, res) => {
  res.json({
    title: 'My Portfolio',
    description: 'Simplified backend API for the React frontend',
    projects: [
      { id: 1, name: 'Project One', url: '#' },
      { id: 2, name: 'Project Two', url: '#' }
    ]
  });
});

// Serve frontend build if available
const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), err => {
    if (err) res.status(404).send('Not found');
  });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
