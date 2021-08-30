console.log("Classes Work is below:");
//creating class named Car
class Car {
    constructor(name) {
      this.brand = name;
    }
    //creating method
    otherBrands(){
        return "I have these brands aslo: "+" Honda Autos Acura Autos 1.Honda Powersports 2. Honda Power Equipment 3. Honda Engines";
    }
  }

  //creating object of class 
  thisCar=new Car("Honda");
  console.log(thisCar.brand);
  //method calling
  console.log(thisCar.otherBrands());

  console.log("destructuring :Example 1");
  //Object and array destructuring.

  //creating variable x
  // we have an array with the name and surname
let arr = ["Ali", "Kolachi"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]

let [firstName,surName] = arr;
console.log(arr[0]);
console.log(arr[1]);

console.log("example 2");

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(a);
console.log(b);
console.log(c);

console.log(one);
console.log(two);
console.log(three);

//Object Destructuring
console.log("Object Destructuring: example ");
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  console.log(options.title);  // Menu
  console.log(options.width);  // 100
  console.log(options.height); // 200


  let options1 = {
    title1: "Menu"
  };
  
  let {width1 = 100, height1 = 200, title1} = options1;
  
  console.log(title1);  // Menu
  console.log(width1);  // 100
  console.log(height1); // 200

  console.log("spread operators: Example");
  //spread operators
  // spread operator for copying 
    let array = ['a','b','c'];
    let array2 = [...array];
    // [ 'a', 'b', 'c' ]
    console.log(array);
    //inserting an element at the end of arr2 
    array2.push('d');
     
    console.log(array2);// [ 'a', 'b', 'c', 'd' ] 
    
    console.log(array); // [ 'a', 'b', 'c' ]


    //rest
    console.log("Rest parameter : Example");
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15   






