const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const forms = multer();
const tailwindo = require('tailwindo');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json());
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/convert', (req, res) => {
  const { html } = req.body;
  const oputput = tailwindo(html);
  res.send(oputput);
})


app.listen(PORT, HOST);


console.log(`Running on http://${HOST}:${PORT}`);