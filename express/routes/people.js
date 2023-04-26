const express = require('express');
let { people } = require('../data');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = people.find((person) => person.id === id);
    if (!person)
        res.status(404).json({ success: false, msg: 'No person with given id' });
    else
        res.status(200).json({ success: true, data: person });
});

router.post('/', (req, res) => {
    const name = req.body.name;
    if (!name)
        res.status(400).json({ success: false, msg: 'Please provide person name' });
    else {
        const id = people.length+1;
        people.push({ id, name });
        res.status(200).json({ success: true, data: { id, name }});
    }
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    if (!name)
        res.status(400).json({ success: false, msg: 'Please provide person name' });
    else {
        const person = people.find((person) => person.id === id);
        if (!person)
            return res.status(404).json({ success: false, msg: 'No person with provided id' });
        people.forEach((person) => {
            if (person.id === id)
                person.name = name;
        });
        res.status(200).json({ success: true, data: { id, name }});
    }
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = people.find((person) => person.id === id);
    if (!person)
        res.status(404).json({ success: false, msg: 'No person with given id' });
    else {
        people = people.filter((person) => person.id !== id);
        res.status(200).json({ success: true, data: person });
    }
        
});

module.exports = router;