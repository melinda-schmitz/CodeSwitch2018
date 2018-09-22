const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EventsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  handle: {
    type: String, 
    required: true, 
    max: 40
  },
  events: [
    {
      name: {
        type: String, 
        required: true, 
      },
      date: {
      type: Date, 
      default: Date.now
      }
    }
  ]
});


module.exports = Events = mongoose.model('events', EventsSchema);