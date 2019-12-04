const mongoose = require('mongoose');

//define a schema/blueprint NOTE: id is not a part of the schema
const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true}
});

//use the blueprint to create the model
//parameters: (model name, schema to use, collection name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model('Patient', patientSchema, 'Patients');
//note capital P in the collection name