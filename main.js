const obj = require('./jokeHandler.js')
const obj2 = require('./utils.js')
var flags = require('flags')
flags.defineString("jokeType","knock-knock","type-of-joke")
flags.defineInteger("upper",0,"upper case")
flags.defineInteger("x",1,"times")
flags.defineInteger("quotes",0,"in quotes")
flags.parse()
//console.log(obj.kj())
//console.log(obj.olj.getRandomJoke())
//console.log(obj2.printXTimes(obj.kj(),3))
if(flags.get("jokeType")=="knock-knock")
{
	var jk = obj.kj()
	if(flags.get("upper")==1)
		jk = obj2.upper(jk)
	obj2.printXTimes(jk,flags.get("x"))
}
else if(flags.get("jokeType")=="one-liner")
{
	var jk = obj.olj.getRandomJoke().body
	if(flags.get("upper")==1)
		jk = obj2.upper(jk)
	obj2.printXTimes(jk,flags.get("x"))
}
