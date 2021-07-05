const figlet = require("figlet");
const colors = require("colors");
figlet('Ascii Ski', function(error, data){
    if(error){
        console.log('Error');
        console.dir(error);
        return;
    }
    console.log(data.rainbow);
});