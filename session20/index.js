console.log("Hello World!");

//[SECTION] Array
//An array is also a storage for multiple elements/values
//Values should be of the same data-type

let pokemon = ["pikachu", "charmander", "squirtle"];
console.log(pokemon);
console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}`);

// Get Length of Array
console.log(pokemon.length);

// Accessing an index that is not existing will result in undefined
console.log(pokemon[10]);

//Array Mutation
//Modifying Array Elements

pokemon[3] = "bulbasaur";

console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";

console.log(pokemon);

pokemon[10] = "Mew";
console.log(pokemon);

pokemon[pokemon.length] = "snorlax";

console.log(pokemon);

//Access the last element on the array
console.log(pokemon[pokemon.length - 1]);

//[SECTION] MODERN ARRAY MUTATION METHODS

let fruits = ["Apple", "Banana", "Melon"];
// push() -> append an element to the tail of an array
console.log(`Original Array: ${fruits}`);

fruits.push("Tomato");

console.log("Push Method: " + fruits);

// pop()
fruits.pop();
console.log("Unshift Method: " + fruits);

// unshift()
fruits.unshift("Strawberry");
console.log("Unshift Method: " + fruits);

fruits.unshift("grapes", "melon", "kiwi");
console.log(`Unshift Method: ${fruits}`);

// shift()
fruits.shift();
fruits.shift();
console.log("Shift Method: " + fruits);

// sort()
fruits.sort();
console.log(fruits);

// reverse()
fruits.reverse();
console.log(fruits);

//splice -> adds/removes an elements on a specified index
fruits.splice(1, 2, "Blueberry", "Chico");
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);

//forEach()
fruits.forEach((fruit) => {
  console.log(fruit);
});
