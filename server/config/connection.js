const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://carolwargo:!Newbeginnings2023@cluster0.jplhrrc.mongodb.net/camp_sessions');

module.exports = mongoose.connection;
