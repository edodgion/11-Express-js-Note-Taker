const express = require("express");
const app = express();
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid/v1");

const express = require("express");
const app = express();
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid/v1");

app.get("/api/notes", (req, res) => res.json(notes));

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuid();
    notes.push(newNote);
    fs.writeFile(
        __dirname + "/../db/db.json",
        JSON.stringify(notes),
        function (error) {
            if (error) throw error;
        }
    );
    res.end();
});

app.delete(`/api/notes/:id`, (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        if (note.id === id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFile(
        __dirname + "/../db/db.json",
        JSON.stringify(notes),
        function (error) {
            if (error) throw error;
        }
    );
    res.end();
});

module.exports = app;