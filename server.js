// console.log('Is this thing on?')
 const express = require('express');
 const bodyParser = require('body-parser');
 const MongoClient = require('mongodb').MongoClient;
 const app = express();
 const PORT = 3000;
 require('dotenv').config({ path: '.env' })

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded ({ extended: true }))
app.use(bodyParser.json());

// app.get('/', function(req, res){
//    res.sendFile(__dirname + '/index.html');
// })



MongoClient.connect('process.env.MONGO_URI')
.then(client => {
   const db = client.db('practice');
			const usersCollection = db.collection('users');

         app.get('/', (req, res) => {
            usersCollection
                .find()
                .toArray()
                .then(results => {
                    res.render('index.ejs', { usersCollection: results })
                })
                .catch(error => console.error(error))
        })

         app.post('/users', (req, res) => {
            usersCollection
        .insertOne(req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(error => console.log(error))
   console.log(req.body);
})
})
.catch(error => console.error(error))

 app.listen(PORT, function(){
    console.log(`Server is live! Listening at port ${PORT}`);
 })