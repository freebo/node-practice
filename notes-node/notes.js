console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log ('Adding', title, body);
};

var getAll = () => {
    console.log ('Getting all notes');
};

var readNote = (title) => {
    console.log ('Reading', title);
};

var rmNote = (title, body) => {
    console.log ('Removing', title);
};


module.exports = {
    addNote,
    getAll,
    readNote,
    rmNote
};
