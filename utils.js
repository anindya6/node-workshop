"use strict"
const upper = (joke) => {
	return joke.toUpperCase()
}
const inQuotes = (joke) => { 
	return "\""+joke+"\""
}
const printXTimes = (joke,x) => {
	var i
	for(i=0;i<x;i++)
		console.log(joke);
}
module.exports = {
	upper: upper,
	inQuotes: inQuotes,
	printXTimes: printXTimes
}
