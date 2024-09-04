// Create a webserver 

// Require the express module
const express = require('express');
const app = express();
const port = 3000;

// Require the comments.json file
const comments = require('./comments.json');

// Create a route for /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Query parameters
// Create a route for /comments
app.get('/comments', (req, res) => {
    const { author } = req.query;
    if (author) {
        const filteredComments = comments.filter(comment => comment.author === author);
        res.json(filteredComments);
    } else {
        res.json(comments);
    }
});
