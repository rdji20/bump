const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '../sea_images_folder_resized');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    console.log('{');
    files.forEach(function (file) {
        console.log(`   "${file}": require("../../sea_images_folder_resized/${file}"),`)
    });
    console.log('}');
});