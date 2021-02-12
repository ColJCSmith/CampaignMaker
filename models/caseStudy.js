// Build the model (ORM) for the case studies that users will choose from 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caseStudySchema = new Schema(
  {
    persona: {
      type: String,
      required: true
    },
    story: {
      type: String,
      trim: false,
      required: true
    },
    Image: {
      type: String,
      required: true
    }
  });

const CaseStudy = mongoose.model("caseStudy", caseStudySchema);

module.exports = CaseStudy;