const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Create a new file
app.post('/createFile', (req, res) => {
  fs.writeFile('newfile.txt', 'Hello World!', (err) => {
    if (err) {
      res.status(500).send('File could not be created');
    }
    res.send('File created successfully');
  });
});

// Read a file
app.get('/readFile', (req, res) => {
  fs.readFile('newfile.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('File could not be read');
    }
    res.send(data);
  });
});

// Update a file
app.put('/updateFile', (req, res) => {
  fs.readFile('newfile.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('File could not be read');
    }
    const updatedData = data + '\n' + 'This is an update.';
    fs.writeFile('newfile.txt', updatedData, (err) => {
      if (err) {
        res.status(500).send('File could not be updated');
      }
      res.send('File updated successfully');
    });
  });
});

// Delete a file
app.delete('/deleteFile', (req, res) => {
  fs.unlink('newfile.txt', (err) => {
    if (err) {
      res.status(500).send('File could not be deleted');
    }
    res.send('File deleted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
