var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mjfhwork:QF6ib98KP8UCg4MvEdsmdONjYUwPcbChuwEYVaVECcCi00LwUIRfnzA9sItPJ7CHFjijGDespRXcloXXL1fRuA==@mjfhwork.documents.azure.com:10255/mikeHome?ssl=true');

var finder = require('findit')(process.argv[2] || '.');

var mikeHome = mongoose.model('MikeHome', {
    fileName: {
        type: String
    }
    // fileSize: {
    //     type: Number
    // },
    // fileDate: {
    //     type: Date
    // }
});
 
finder.on('directory', function (dir, stat, stop) {
    console.log(dir + '/')
});
 
finder.on('file', function (file, stat) {
    console.log(file);

    var newFile = new mikeHome({
    fileName: file
    // completed: true,
    // completedAt: new Date()
});

newFile.save().then((doc) =>{
    console.log('File saved', doc)
}, (e) => {
    console.log('Unable to save file')
});
});
 
finder.on('link', function (link, stat) {
    console.log(link);
});