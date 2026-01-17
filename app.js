const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'add notes',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: String
        },
        body: {
            describe: "notes body text",
            demandOption: true,
            type: String
        }
    },
    // handler: function (argv) {
    //     console.log('add commond');
    //    notes.addNote(argv.title,argv.body)
    //    console.log('add commond end');
    // }

    //ES6 Method definition syntax
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    builder: {

        title: {
            describe: 'note title',
            demandOption: true,
            type: String
        }
    },
    // handler: function (argv) {
    //     console.log('remove commond called')
    //     notes.removeNote(argv.title)
    // }

    //ES6 Method definition syntax
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: "list of notes",
    // handler:function(){
    //  console.log('read list of notes');
    // }

    //ES6 Method definition syntax
    handler() {
        notes.listNotes();
    }


});


yargs.command({
    command: 'read',
    describe: "read notes",
    builder:{
        title:{
            describe:'read notes',
            demandOption:true,
            type:String
        }
    },
    // handler:function(){
    //  console.log('read all notes');
    // }

    //ES6 Method definition syntaxt
    handler(argv) {
        notes.readNote(argv.title)
    }
});
yargs.parse();




