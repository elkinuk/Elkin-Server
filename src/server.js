import express from 'express';
import bodyParser from 'body-parser';
import posts from './data/posts.json';
import contacts from './data/contacts.json';
import fiddles from './data/fiddles.json';
import projects from './data/projects.json';

const app = express();

app.use(bodyParser.json());

const getPostById = postId => {
    return posts.data.find(post => post.id === postId);
}

app.get('/api/posts', (req, res) => res.send(posts));
app.post('/api/posts/:id/add-comment', (req, res) => {
    const {text, username} = req.body;
    const post = getPostById(req.params.id);

    const comment = {text, username};

    post.comments ? post.comments.push(comment) : post.comments = [comment];

    res.status(200)
        .send(`Comment from ${username} was added`);
});
app.get('/api/posts/:id/get-comments', (req, res) => res.send(getPostById(req.params.id).comments));
app.post('/api/posts/:id/upvote', (req, res) => {
    const post = getPostById(req.params.id);

    post.upvotes = post.upvotes ? +post.upvotes + 1 : 1;
    res.status(200)
        .send(`${postId} now has ${post.upvotes} upvotes`);
});

app.get('/api/contacts', (req, res) => res.send(contacts));
app.get('/api/fiddles', (req, res) => res.send(fiddles));
app.get('/api/projects', (req, res) => res.send(projects));

app.listen(8000, () => console.log('Listening on port 8000'));
