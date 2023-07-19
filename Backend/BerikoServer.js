const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Connect to the MongoDB database
const uri = 'mongodb+srv://raghavan20pw26:raghavan20pw26@assignment.wbcf3qb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Beriko").collection("BerikoMessages");

  // Create the Express app
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // Define the route for adding messages
  app.post('/messages', (req, res) => {
    const message = {
      text: req.body.text,
      createdAt: req.body.createdAt,
      user: {
        _id: req.body.user._id,
        name: req.body.user.name,
        avatar: req.body.user.avatar,
      },
    };
    collection.insertOne(message, (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        console.log('Message added to database');
        res.sendStatus(200);
      }
    });
  });

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
