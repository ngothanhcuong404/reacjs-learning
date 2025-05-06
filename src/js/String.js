let text = "Hello JavaScript World. JavaScript is powerful.";

console.log(text.search(/JavaScript/)); // tim ra số index bắt đầu của phần tử
console.log(text.indexOf("JavaScript"));    // tim ra số index bắt đầu của phần tử
console.log(text.lastIndexOf("JavaScript")); //	Tìm vị trí cuối cùng của substring.
console.log(text.includes("World"));     // kiểm tra tồn tại và trả về true false   
console.log(text.startsWith("Hello"));    //kiểm tra xem chuỗi search đầu tiên
console.log(text.endsWith("powerful."));    //kiểm tra xem chuỗi search cuối cùng

console.log(text.slice(0, 5)); // cắt chuỗi từ index 0 đến 5
console.log(text.substring(0, 5)); // cắt chuỗi từ index 0 đến 5
console.log(text.substr(0, 5)); // cắt chuỗi từ index 0 đến 5
console.log(text.replace("JavaScript", "TypeScript")); // thay thế chuỗi

console.log(text.toUpperCase()); // chuyển thành chữ hoa
console.log(text.toLowerCase()); // chuyển thành chữ thường
console.log(text.trim()); // xóa khoảng trắng đầu và cuối chuỗi
console.log(text.trimStart()); // xóa khoảng trắng đầu chuỗi
console.log(text.trimEnd()); // xóa khoảng trắng cuối chuỗi
console.log(text.padStart(10, "0")); // thêm chuỗi vào đầu chuỗi
console.log(text.padEnd(10, "0")); // thêm chuỗi vào cuối chuỗi
console.log(text.repeat(3)); // lặp chuỗi
console.log(text.split(" ")); // chuyển chuỗi thành mảng
console.log(text.split(" ", 3)); // chuyển chuỗi thành mảng và giới hạn số phần tử

