const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Patient = require('./models/patient')
//connect and display the status
mongoose.connect('mongodb://localhost:27017/IT6203', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//Use the following code on any request that matches the specific mount path
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    //Allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
app.get('/patients', (req, res, next) => {
    //call mongoose method find (MongoDB db.Patients.find())
    Patient.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    })
  });
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/patients/:id", (req, res, next) => {
    Patient.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.options(bodyParser.urlencoded({ extended: false }))

app.post('/patients', (req, res, next) => {
    const patient = new Patient ({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    patient.save()
        //in case of success
        .then(() => { console.log('Success');})
        //if error
        .catch(err => {console.log('Error:' + err);});
});
// serve incoming put requests to /patients
app.put('/patients/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Patient.findOneAndUpdate({_id: req.params.id},
        {$set:{firstName : req.body.firstName,
          lastName : req.body.lastName}},{new:true}) 
       .then((patient) => {
          if (patient) { //what was updated
            console.log(patient);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });  


//To use this middleware in other parts of the application
module.exports=app;