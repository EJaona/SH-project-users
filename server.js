const express = require('express')
const cors = require('cors')
const server = express();

const data = [
    {
        name: "Bob",
        age: 77,
        gender: 'male'
    },
    {
        name: "Dan",
        age: 12,
        gender: 'not sure'
    },
    {
        name: "Amanda",
        age: 45,
        gender: 'female'
    }
]




server.use(cors());
server.use(express.json())

server.get('/user', (req, res) => {
    console.log(req)
    res.status(200).json(data)

})

server.post('/user', (req, res) => {

    const {name, age, gender} = req.body
    if(!name || !age || !gender) {

        res.status(404).json({message: 'cant post. Missing details'})
    }

    data.push(req.body)

    res.status(201).json({message: 'created user'})
})

server.listen(8000, _ => {
    console.log('running at 8000')
})