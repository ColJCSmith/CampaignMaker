const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caseStudySchema = new Schema(
  {
    Persona: {
      type: String,
      trim: true,
      required: ""
    },
    Story: {
      type: String,
      trim: false,
      required: ""
    },
    Image: {
      type: Image,
      required: ""
    }
  });

const caseStudy = mongoose.model("caseStudy", caseStudySchema);

module.exports = caseStudy;