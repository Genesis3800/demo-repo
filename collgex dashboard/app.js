var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const College = require('./models/College');
const { response } = require('express');

mongoose.connect("mongodb+srv://admin:admin@cluster0-nbxxl.mongodb.net/blogeditor?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology:true});

app.post('/new', async(req, res) => {
    const college = new College({
        title:req.body.title,
        text:req.body.text
    });
    await college.save();
    return res.send('Saved');
});

app.get('/new', async(req, res)=>{
    return res.sendFile(__dirname + '/public/collegefind.html');
});

app.get('/new/:name', async(req, res)=>{
    College.findOne({title:req.params.name}, async(err, found) => {
        if(err)
        return err;
        if (!found)
        return res.send('Not Found');
        else
        return res.send(found.text);
    });
    return 0;
});

app.listen(process.env.PORT || 8080, function(){
    console.log(`Server is running on ${process.env.PORT}`);
});