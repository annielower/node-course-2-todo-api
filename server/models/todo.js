    var mongoose = require('mongoose');
    //mongoose automatically waits so u don't have to wait for it to return
    //save new something

    var Todo = mongoose.model('Todo',{
        text: {
            type: String,
            required: true,
            minlength: 1,
            trim:true
        },
        completed:{
            type: Boolean,
            default: false
        },
        completedAt:{
            type: Number,
            default: null
        }
    });

    module.exports = {Todo};