const express = require('express');
const mc = require('./controllers/messages_controller');


const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const baseURL = '/api/messages';
app.post(baseURL, mc.create);
app.get(baseURL, mc.read);
app.put(`${baseURL}/:id`, mc.update);
app.delete(`${baseURL}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})