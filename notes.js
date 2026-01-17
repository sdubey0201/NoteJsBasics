const fs = require('fs')
const chalk = require('chalk');
const getNotes = function () {
    return 'get notes....'
}

// const addNote = function (title, body) {
//     console.log('add function')
//     const notes = loadNots();
//     const duplicateNotes = notes.filter(function (note) {
//         console.log('notes title',note.title);
//         console.log('title',title);
//         return note.title == title;
//     });
//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes);
//         console.log('New node is saved successfully');
//     } else {
//         console.log('give note title aleady exist!');
//     }

// };

// using arrow function 
const addNote = (title, body) => {
    const notes = loadNots();
    //const duplicateNotes = notes.filter((note) => note.title == title);
    const duplicateNote = notes.find((note)=>note.title=== title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log('give note title aleady exist!');
    }

};

// const saveNotes = function (notes) {
//     const dataNotes = JSON.stringify(notes);
//     fs.writeFileSync('notes.json', dataNotes);
// }

const saveNotes = (notes) => {
    const dataNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataNotes);
}

// const loadNots = function () {
//     try {
//         console.log('load function')
//         const noteBuffer = fs.readFileSync('notes.json');
//         const noteData = noteBuffer.toString();
//         return JSON.parse(noteData);
//     } catch (error) {
//         console.log('Empty notes')
//         return [];
//     }

// }

const loadNots = () => {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const noteData = noteBuffer.toString();
        return JSON.parse(noteData);
    } catch (error) {
        return [];
    }

}


// const removeNote = function(title){
//   const notes = loadNots();
//   const notesNeedToKeep = notes.filter(function(note){
//       return note.title!=title;
//   });
//   if(notes.length === notesNeedToKeep.length){
//     console.log(chalk.red.inverse('note not founed'));
//   }else{
//     saveNotes(notesNeedToKeep);
//     console.log(chalk.green.inverse('Note removed'));
//   }


// }

const removeNote = (title) => {
    const notes = loadNots();
    const notesNeedToKeep = notes.filter((note) => note.title != title);
    if (notes.length === notesNeedToKeep.length) {
        console.log(chalk.red.inverse('note not founed'));
    } else {
        saveNotes(notesNeedToKeep);
        console.log(chalk.green.inverse('Note removed'));
    }


}

const listNotes = () => {
   const notes = loadNots();
   console.log(chalk.inverse.green('your notts....'));
   notes.forEach((element)=>{
    console.log(element.title);
   })

   
}

const readNote = (title) =>{
    const notes =loadNots();
    const note = notes.find((note)=>note.title===title);
    if(note){
      console.log('Title : ',chalk.inverse.green(note.title));
      console.log('Body : ',note.body);

      
    }else{
        console.log(chalk.inverse.red('Note not found'));
        
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
};