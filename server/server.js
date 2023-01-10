const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/files/:filename', (req, res) => {
    const filepath = path.resolve(__dirname, '../react-kit/src/files', req.params.filename);
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal server error');
        return;
      }
  
      res.send(data);
    });
  });
  

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});