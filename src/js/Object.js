let person = {
    firstName: 'John',
    lastName: 'Doe',
    show: function () {
        console.log('show' + this.firstName); // dùng this để truy cập giá trị trong object hiện tại 
    } // thêm method vào object
};
person.show()
function greet() {
    console.log('Hello, World!');
}

person.greet = greet; // gán thêm method cho object person

person.greet();
console.log(person);

let person1 = { name: "Cuong", age: 21 };
let person2 = person1; // tham chiếu

person2.age = 22;
 
console.log(person1.age);


let person3 = {...person1} // thay vì tham chiếu thì sao chép person1 sang person3 nên person3 là object

person3.age = 33
console.log(person1.age);
console.log(person3.age);

function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    } // xử lý để ko cần new cũng chạy và dùng new để tạo object mới

    this.firstName = firstName;
    this.lastName = lastName;
}

let nguoi =  Person("John", "Doe");

console.log(nguoi);

// Prototype
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

let dog = new Animal("Dog"); // dog có thể gọi method speak qua prototype trung
dog.speak(); 


//method 
const user = {name : 'cuong' , age : 21};
const user2 = {name : 'cuong2' , age : 21};
const merge = Object.assign(user,user2); // gộp 2 object thành 1
console.log(merge); // gộp user2 vào user
console.log(Object.values(user)); // trả về mảng các giá trị của object
console.log(Object.keys(user)); // trả về mảng các key của object
console.log(Object.entries(user)); // trả về mảng các cặp key-value của object
// dùng Object để so sánh 2 giá trị so sánh giống ===
console.log(Object.is(NaN, NaN));     //  true
console.log(Object.is(+0, -0));       //  false
console.log(Object.is(5, 5));         //  true


// Object.groupBy() node không hỗ trợ 