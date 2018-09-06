var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient

var url="mongodb://shivi:Qwerty1@ds145752.mlab.com:45752/cb";



module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: false }))
    
    app.get('',function(req,resp){
        resp.render('home');
    })

    app.post('/listingpage',function(req,resp){
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("cb");
            var date = req.body.date;
            var event1 = req.body.event;
          
            dbo.collection("catererlist").find({location:req.body.location,available:true}).toArray(function(err, result) {
                if (err) throw err;             
                resp.render('listingpage',{data:result, dateDisplay:date, eventDisplay:event1});  
              });
          });
        

  });
    

    app.get('/catererdp',function(req,resp){
        resp.render('catererdp');
    })

    
}