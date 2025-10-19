const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  majors: [{
    type: String
  }],
  requirements: {
    matricMarks: {
      type: Number,
      required: true
    },
    interMarks: {
      type: Number,
      required: true
    }
  },
  applicationLink: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ranking: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('University', universitySchema);
