
(function () {
    console.log('abc');
 })(); //gọi luôn func không cần gọi lại hàm 

// JavaScript Recursive Function\
let a = 0;
function recurse() {
   console.log('abc')
   if(a < 5) {
    a++;
    recurse();
   }
} // khi một func gọi lại chính nó thì nó là đệ quy
recurse()
// add(10,10); không thể gọi trước vì khác func thường ko có hoiting 
 
const add = function (x, y) {
    return x + y;
}; // cách 1
let add2 = (x, y) => x + y; // cách 2 

console.log(add(10, 20));
console.log(typeof add); //func
console.log(typeof add());// number

console.log(add instanceof Function); // true
console.log(add() instanceof Function); // false
 

//Rest Parameters  
function example(...args) {
    console.log(args);
  }
  
  example(1, 2, 3) //cho phép bạn gom nhiều đối số thành một mảng.