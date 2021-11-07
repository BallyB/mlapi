const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const experimentSchema = mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  guideline: { type: String, required: true },
  consentForm: {type: String, required: true},
  content: {type: String, required: false},
  experimentType: {type: Number, required: true},
  ageFilter: {type: String, required: false},
  spokenLanguage: {type: String, required: false},
  nativeLanguage: {type: String, required: false},
  regionID: {type: String, require: false},
  schoolLevel: {type: String, required: false},
  trouble: {type: Boolean, required: true},
  result: {type: String, required: false},
  researcherId: {type: String, required: true}
  //Resultats 
  //Ajouter researcherID
});

experimentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Experiment', experimentSchema);