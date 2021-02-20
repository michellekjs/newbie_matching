const mongoose = require('mongoose');
const Schema1 =mongoose.Schema;

let Class = new Schema1({
    classname:{ type: String,  required: true },
    classpwd: { type: String, unique: true, required: true },
    classdescrip: { type: String, required: true },
});

module.exports = mongoose.model('Class',Class);