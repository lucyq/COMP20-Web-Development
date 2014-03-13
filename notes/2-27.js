//
//	M O R E   O N   O B J E C T S
//

function addIsADrunk (name) {
	console.log(name + " is a drunk.");
}

s = addIsADrunk;

/* Since you can save functions as variables, 
you can pass functions to other functions! */

function composition (func,value) {
	return func(value);
}


composition(s, "Robin");


names = ["Michael", "Tom", "Dick", "Harry", "Bobo"];
// takes in a function and uses function on every object in list
// for each and item, it'll run the addIsADrunk function
// output shuld be "Michael is a Drunk" "Tom is a Drunk" etc.
names.map(addIsADrunk);

/* this is an introduction to first class function
 a function is first class if it can be used as a variable 
 & be passed into other functions
 */

// How would we find the maximum?
// Example: 
list = [14, 25, 22, 2, 1, -9, 13, 7];
// there's a max function!
// Math.max(10, 20); would return 20

// if you're setting something to a value, you don't need the ()
s = addIsADrunk;

silly = new Object();
console.log(silly);

// creating new function and then passing in old function?
silly.addDrunk = s;
silly.addDrunk("Pee Wee");



var y = 23;
fucntion sampling (x)
{
var y;
 y = x -2;
 return x * y

}
console.log(sampling(12));
console.log(y);


