const moment = require('moment');  // time formatter library 

// returning object 
function FormatMessage(username,message){ 

    return{
        username : username,
        message : message,
        time : moment().local().format('hh:mm a')
    };


}

module.exports = FormatMessage;