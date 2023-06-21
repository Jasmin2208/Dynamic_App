const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Dynamic_Website').then(() => console.log('Connected!')).catch((err) => console.log(err));