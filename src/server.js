import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const getPostById = async (id, db) => {
    return await db.collection('posts').findOne({id});
}

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true});
        const db = client.db('blog');
    
        await operations(db);
    
        client.close();
    } catch(error) {
        res.status(500).json({ error: ''+error })
    }
}

app.get('/api/posts', async (req, res) => {   
    await withDB (async db => { 
        const posts = await db.collection('posts').find();
        res.status(200).json(posts);
    }, res);
});
app.get('/api/posts/:id', async (req, res) => {
    await withDB (async db => { 
        const post = await getPostById(req.params.id, db);
        res.status(200).json(post ? post : {});
    }, res);
});
app.post('/api/posts/:id/add-comment', async (req, res) => {
    await withDB (async db => { 
        const {text, username} = req.body;
        const post = await getPostById(req.params.id, db);
        const comments = post.comments ? [...post.comments, {text, username}] : [{text, username}];
        
        await db.collection('posts').updateOne({id: req.params.id}, {
            '$set': {
                comments
            }
        });

        const updatedPost = await getPostById(req.params.id, db);
        res.status(200).json(updatedPost.comments);
    }, res);
});
app.get('/api/posts/:id/get-comments', async (req, res) => {
    await withDB (async db => { 
        const post = await getPostById(req.params.id, db);
        res.status(200).json(post.comments ? post.comments : []);
    }, res);
});
app.post('/api/posts/:id/upvote', async (req, res) => {
    await withDB (async db => { 
        const post = await getPostById(req.params.id, db);
        await db.collection('posts').updateOne({id: req.params.id}, {
            '$set': {
                upvotes: post.upvotes ? +post.upvotes + 1 : 1
            }
        })
        const updatedPost = await getPostById(req.params.id, db);
        res.status(200).json(updatedPost.upvotes);
    }, res);
});

app.listen(8000, () => console.log('Listening on port 8000'));
