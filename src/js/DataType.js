
let numberExample = 42;
console.log("Number:", numberExample);


let stringExample = "Hello, world!";
console.log("String:", stringExample)


let booleanExample = true;
console.log("Boolean:", booleanExample); 


let undefinedExample;
console.log("Undefined:", undefinedExample); 


let nullExample = null;
console.log("Null:", nullExample);

let symbolExample = Symbol("id");
console.log("Symbol:", symbolExample); 


let bigIntExample = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntExample); 


let objectExample = { name: "Cuong", age: 21 };
console.log("Object:", objectExample);


let arrayExample = [1, 2, 3];
console.log("Array:", arrayExample);


function sayHello() {
  return "Hello!";
}
console.log("Function:", sayHello);


console.log("typeof numberExample:", typeof numberExample); // => "number"
console.log("typeof stringExample:", typeof stringExample); // => "string"
console.log("typeof booleanExample:", typeof booleanExample); // => "boolean"
console.log("typeof undefinedExample:", typeof undefinedExample); // => "undefined"
console.log("typeof nullExample:", typeof nullExample); // => "object" 
console.log("typeof symbolExample:", typeof symbolExample); // => "symbol"
console.log("typeof bigIntExample:", typeof bigIntExample); // => "bigint"
console.log("typeof objectExample:", typeof objectExample); // => "object"
console.log("typeof arrayExample:", typeof arrayExample); // => "object"
console.log("typeof sayHello:", typeof sayHello); // => "function"

console.log("kiểu dữ liệu tham chiếu ")
let person1 = { name: "Cuong", age: 21 };
let person2 = person1; // tham chiếu

person2.age = 22;

console.log( "person1 bị thay đổi bởi person2 :" + person1.age);
let arr1 = [1, 2, 3];
let arr2 = arr1; // tham chiếu

arr2.push(4);

console.log( "arr1 bị thay đổi bởi arr2 :" + arr1);