const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email id");
            }
        }
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

//we need to create collection
const UserMessage = mongoose.model('UserMessage', userSchema)

module.exports = UserMessage