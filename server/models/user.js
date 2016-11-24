    var mongoose = require('mongoose');

    //user model
    //email - require, trim, set type string, set length

    var User = mongoose.model('Users', {
        email: {
            type: String,
            required : true,
            minlength: 1,
            trim:true
        }
    });

        module.exports = {User};