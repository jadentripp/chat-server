const express = require('express')

const bc = require('./controllers/messages_controller')

const app = express();

app.use(express.json());

const port = 3001

app.listen(port, ()=> console.log( `Server is listening on port ${port}`))

app.get('/api/messages', bc.create)
app.post('/api/messages:id', bc.read)
app.put('/api/messages', bc.update)
app.delete('/api/messages:id', bc.delete)