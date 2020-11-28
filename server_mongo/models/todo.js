const mongoose = require('mongoose');

// Define Schemes
const todoSchema = new mongoose.Schema({

  year: { type: Number, unique: true },
  average_temperature: { type: Number },
  the_highest_temperature: { type: Number }
},
{ collection: 'years_data' });

// Create Model & Export

// const todo = new Todo({
//   year: 2020,
//   average_temperature: 20,
//   the_highest_temperature: 30,
//   ...
// });


todoSchema.statics.create = function (payload) {
  // this === Model
  const todo = new this(payload);
  // return Promise
  return todo.save();
};

// Find All
todoSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by todoid
todoSchema.statics.findOneByTodoid = function (todoid) {
  return this.findOne({ todoid });
};

// Update by todoid
todoSchema.statics.updateByTodoid = function (todoid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ todoid }, payload, { new: true });
};

// Delete by todoid
todoSchema.statics.deleteByTodoid = function (todoid) {
  return this.remove({ todoid });
};

module.exports = mongoose.model('Todo', todoSchema);
