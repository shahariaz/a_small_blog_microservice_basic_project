const express = require('express');
 const {randomBytes} = require('crypto');
const { log } = require('console');

const commentsByPostId = {};


 const setupAndStartServer = async ()=>{
    const app = express();
    const port = 3001;
    app.use(express.json());
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.get('/posts/:id/comments',(req,res)=>{
        res.send(commentsByPostId[req.params.id] || [])


    })
    app.post('/posts/:id/comments',(req,res)=>{
        const commentId = randomBytes(4).toString('hex');
       const {content} = req.body;
       const comments = commentsByPostId[req.params.id] || []
       comments.push({id: commentId, content: content})
         commentsByPostId[req.params.id] = comments
         res.status(201).json({
                status: 'success',
                data: commentsByPostId[req.params.id]
            })
        

    })
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
 }
    setupAndStartServer();
    