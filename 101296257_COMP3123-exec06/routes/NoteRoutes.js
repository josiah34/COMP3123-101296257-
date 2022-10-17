const noteModel = require('../models/NotesModel');
const express = require('express');
const routes = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

// {
//     "noteTitle": "Note 1",
//     "noteDescription": "Note 1 Description",
//     "priority": "HIGH",
//     "dateAdded": "2022-10-10",
//     "dateUpdated": "2022-10-10"
// }


routes.post('/notes', async(req, res) => {
    const newNote = new noteModel(req.body)
    try {
        await newNote.save()
        res.status(201).send(newNote)
    } catch(error){
        res.status(400).send(error)
    }

})

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async(req, res) => {
    try {
        const getNotes = await noteModel.find()
        res.send(getNotes)
    } catch(error){
        res.status(500).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:id', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try {
        console.log(req.body)
        const getNote = await noteModel.findById(req.params.id, req.body)
        res.send(getNote)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:id', async (req, res) => {
 try {
     const updateNote = await noteModel.findByIdAndUpdate(req.params.id, req.body)
     res.send(updateNote)
 }
    catch(error){
        res.status(500).send(error)
    }
})

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:id', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        const deleteNote = await noteModel.findByIdAndDelete(req.params.id)
        res.send(deleteNote)
    }
    catch(error){
        res.status(500).send(error)
    }  
});

module.exports = routes;