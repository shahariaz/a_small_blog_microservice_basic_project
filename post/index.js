const express = require('express');
 const {randomBytes} = require('crypto');
const { log } = require('console');

const posts = {};


 const setupAndStartServer = async ()=>{
    const app = express();
    const port = 3000;
    app.use(express.json());
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.get('/posts',(_,res)=>{

    })
    app.post('/posts',(req,res)=>{
        const id = randomBytes(4).toString('hex');
        console.log(req.body.title);
        const {title} = req.body;
        posts[id] = {
            id,title
        }
        res.status(201).send(posts[id])
        console.log(posts);

    })
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
 }
    setupAndStartServer();
    