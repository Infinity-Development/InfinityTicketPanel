const express = require("express");
const mongoose = require("mongoose");
const transcripts = require("./models/transcripts");
const cors = require("cors");
const config = require("./config")

let app = express();

mongoose.connect(
  config.mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.get("/api/v1/get/:id", async (req, res, next) => {
  let transcript = await transcripts.findOne({ ticketID: req.params.id });

  if (!transcript) return res.json({ error: "Ticket not found!" }).status(404);
  console.log(transcript);
  return res.json({ ticket: transcript });
});

app.listen(8089, () => {
  console.log("Infinity Transcripts backend is Online");
});
