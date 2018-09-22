const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  events: {
    type: Schema.Types.ObjectId,
    ref: 'events'
  }

});

module.exports = Calendar = mongoose.model('calendar', CalendarSchema);