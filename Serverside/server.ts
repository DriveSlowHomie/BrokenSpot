let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let secretRoute = require('./routes/route');

const app = express();

//database connection
// mongoose.connect('mongodb://localhost/dbName');
//
// let db = mongoose.connection;
// db.on('error', console.error.bind('connection error'));
// db.once('open', () => {
//   console.log('wubbalubbadubdub');
// })

app.use(express.static('../Clientside'));
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json())


app.get('/', function(req, res) {
  res.send("Hello World!");
})

// app.use('/api', secretRoute)

app.listen(3000, () => {
  console.log("wubalubadubdub")
})
