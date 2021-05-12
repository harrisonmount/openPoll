const express = require('express');
const cors = require('cors');
const { json } = require('express');
const monk = require('monk');
const ratelimit = require('express-rate-limit');
const app = express();

const db = monk('localhost/openpoll');

const polls = db.get('polls');//collection

app.use(cors());//adds cors headers to any info passing into server
app.use(express.json()); //parser


app.get('/', (req, res) => {
    res.json({
        message: 'Poller!'
    });
});

app.get('/polls', (req, res) => {
    polls
        .find()
        .then(polls => {
            res.json(polls);
        })
});

function isValidPoll(poll) {
    return poll.name && poll.name.toString().trim() !== '' &&
        poll.content1 && poll.content1.toString().trim() !== '' &&
        poll.content2 && poll.content2.toString().trim() !== '';
}

/*function voteonpoll(poll, buttonNo) {
    polls
    .update(
        {_id: poll.id},
        {$set: {votes1: votes1+1}}
    )
}*/ 

//middleware is top down so the rate limit is only effecting POST
app.use(ratelimit({
    windowMs: 15 * 60 * 1000,//15 minutes
    max: 100 //amount of posts
}));

app.post('/polls', (req, res) => {
    if(isValidPoll(req.body)) {
        //insert into database
        const poll = {
            name: req.body.name.toString(),
            content1: req.body.content1.toString(),
            content2: req.body.content2.toString(),
            votes1: req.body.votes1,
            votes2: req.body.votes2,
            created: new Date()
        };

        polls
        .insert(poll)
        .then(createdPoll =>{
            res.json(createdPoll);
        });
    } else {
        res.status(422);
        res.json({
            message: 'Name and content required'
        });
    }
});

app.post('/polls/vote',(req,res) => {
    const id = req.body.pollid;
    const option = req.body.op;
    const voteone = req.body.votenumber1;
    const votetwo = req.body.votenumber2;
    if(option == 1)
    {
        polls.update(
            {_id: id},
            {$set: {'votes1': voteone+1}}
        )
        .then(createdPoll =>{
            res.json(createdPoll);
        });
    }
    else if (option == 2)
    {
        polls.update(
            {_id: id},
            {$set: {'votes2': votetwo+1}}
        )
        .then(createdPoll =>{
            res.json(createdPoll);
        });
    }
    //log.console(id + " : "+choice);
    /*const reci = {
        polli: req.body.polli.toString(),
        opp: req.body.opp,toString()
    };
    polls
    .update(
        poll._id,
        {$set: { votes1 : votes1+1}}
    )
    .then(updatedPoll =>{
        res.json(updatedPoll);
    })*/
});

app.listen(5055,() =>{
    console.log('Listening on http://localhost:5055...');
});
