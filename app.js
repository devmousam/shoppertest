// const fs = require('fs')
// fs.appendFileSync('demofile.txt','\nDemo text three');



// const notes = require('./notes.js');
// var noteslist = notes();
// console.log(noteslist);



// const validator = require('validator')
// console.log(validator.isURL('erewrwrwerwerwe'))



// const chalk = require('chalk');
// console.log(chalk.red('I am mousam'));
// console.log(chalk.bold.red('I am mousam'));



// //Add a new node
// const yargs = require('yargs')
// yargs.command({
// 	command: 'add',
// 	description: 'Add a node',
// 	builder: {
//       title: {
//       	description: "Add a title",
//       	demandOption: true,
//       	type: 'string'
//       },
//       body: {
//       	description: "Add a body",
//       	demandOption: true,
//       	type: 'string'
//       }
// 	},
// 	handler: function(argv){
// 		console.log('Title - ' + argv.title)
// 		console.log('Body - ' + argv.body)
// 	}
// })
// //Remove a node
// yargs.command({
// 	command: 'remove',
// 	description: 'Remove a node',
// 	handler: function(){
// 		console.log('Removing node');
// 	}
// })
// //Read a node
// yargs.command({
// 	command: 'read',
// 	description: 'Read a node',
// 	handler: function(){
// 		console.log('Reading node');
// 	}
// })
// //List all node
// yargs.command({
// 	command: 'list',
// 	description: 'list all node',
// 	handler: function(){
// 		console.log('Listing node');
// 	}
// })
// console.log(yargs.argv)


const event = {
	name: "mousam",
	guestList: ["John", "Michle", "Lila"],
	printGuestList: function(){
		console.log("Guest list is - " + this.name)

		this.guestList.forEach(function(guest){
           console.log(guest + " is ready for party")
		})
	}
}
event.printGuestList()


