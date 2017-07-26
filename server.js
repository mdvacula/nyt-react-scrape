//Server Dependecies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

//Db Models
var Article = require("./models/article");
//New Express App
var app = express();

var PORT = process.env.PORT || 3001

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}))

app.use(express.static("build"));

var dbUri = "mongodb://localhost/nytreact";
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect(dbUri);
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose conneciton successful.");
});

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/public/index.html");
});

//app.get("/api/saved")
app.get("/api/saved", function(req, res) {
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/api/saved", function(req, res){
  var article = new Article({
   title: req.body.title,
   date: req.body.date,
   url: req.body.url
  });
   article.save(function(err) {
     if(err) {
       console.log(err);
     } else {
       console.log('Article Saved');
       res.send("Success");
     }
   })
});


//app.delete("")
app.delete("/api/saved/:id", function(req,res){
  console.log(req.params);
  Article.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Article Deleted");
      res.send("Deleted");
    }
  });
});


console.log(PORT);
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
