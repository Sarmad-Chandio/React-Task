//difference b/w var and let
console.log("Example 1 : let vs var");
var x = 10;
// Here x is 10
console.log(x);
{
  let x = 2;
  // Here x is 2
  console.log(x);
}
// Here x is 10
console.log(x);
console.log("Example 2 : var vs let");

//an other example
//use of this keyword
var z=10;
for(let z=0;z<=this.z;z++){
  console.log(z);
}

console.log("Example 3 var vs let vs const");
//difference b/w var and const

var y = 10;
// Here y is 10
console.log(y);
{
  const y = 2;
  // Here y is 2
  console.log(y);
}
// Here y is 10
console.log(y);

//using const variable
console.log("example 4");
const game = {
  title: 'Systems: Hello to the Wild Life',
};

game.title = `Yes : you are awesome`;

console.log(game.title); //Yes : you are awesome


console.log("Arrows Fusnctions :");
console.log("example 1");

//normal function 
hello = function() {
  return "Hello World!";
}
console.log(hello());
//arrow fucntion, we are removing name of function
hello = () => {
  return "Hello World!";
}
console.log(hello());


console.log("Example 2");

playGame = ()=> {
  let gameName = "Super Mario Brothers";

  gameName = "Mario Kart 8";

  return " "+gameName;
}

console.log(playGame());














