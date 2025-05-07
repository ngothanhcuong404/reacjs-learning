// đặc trưng es6

//let vs const
let a = 1;
const b = 2; // let vs const đc tạo ra từ es6 trước đó chỉ có var và không có block scope

// arrow function
const sum = (a, b) => a + b;
console.log(sum(1, 2));

//Template Literals
const name = 'Cuong';
const age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);  //chèn biến trong chuỗi

//Destructuring
const person = { name: 'Cuong', age: 21 };
const { name: name1, age: age1 } = person;
console.log(name1, age1);

// Rest & Spread Operator
// rest operator dùng trong các trường hợp muốn gom các phần tử lại 
function sum2(...numbers) {

    return numbers.reduce((a, b) => a + b, 0); // rest operator áp dụng cho mảng
}
sum(1, 2, 3, 4, 5);
// spread operator dùng trong các trường hợp muốn tách phần tử hoặc sao chép mảng/object một cách dễ dàng.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // spread operator áp dụng cho object
console.log(merged);

// Enhanced Object Literals
const name2 = "Cuong2";
const person2 = {
  name2, // tự động gán key bằng tên biến
  greet() {
    console.log("Hello");
  } // tự động gán value bằng function
};
console.log(person2);

// khi chưa có es6
const person3 = {
  name3: name2,
  greet: function() {
    console.log("Hello");
  } // phải gán key bằng tên biến và value bằng function
};
console.log(person3);
//Promises 
// chỉ có từ es6
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // thực hiện 
    let success = true;

    if (success) {
      resolve("Success!");  // Hoàn thành thành công
    } else {
      reject("Failure!");   // Thất bại
    }
  }, 1000);

});
promise.then((value) => {
  console.log(value);
}); // đc sử dụng để giải quyết bất đồng bộ 


