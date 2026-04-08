const express = require("express");
const notemodel = require("./model/note.model");
const app = express();

app.use(express.json());
// titiles , description

// post /notes  -> create a note
// get  /notes   -> fetch notes
// update /notes/:id -> modify notes
// delete /notes/:id  -> delete the note

app.post("/notes", async (req, res) => {
  const data = req.body;
  await notemodel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note ccreated",
  });
});
app.get("/notes", async (req, res) => {
  const notes = await notemodel.find();
  //    findOne({
  //     title : "hello shreya's vlog day_3"
  //    }) // find return array []
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});


app.delete("/notes/:id" , async (req,res) => {
    const id = req.params.id
    await notemodel.findOneAndDelete({
        _id : id   //whatever the id in database which save in underscore formate so we wrote it underscodre

    })
    res.status(201).json({
        message : "Note Deleted successfully"
    })
})

app.patch("/notes/:id" , async(req,res) => {
    const id = req.params.id
    const description = req.body.description

    await notemodel.findOneAndUpdate({_id: id} , {descripton: description})

    res.status(200).json({
        message : "Notes Updated succeessfully"
    })
})

module.exports = app;
