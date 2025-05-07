const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Số lượng item trong mảng :" + arr.length);

arr.push(8, 9);
console.log("Dùng push thêm item vào mảng :" + arr);

arr.unshift(0);
console.log("Dùng unshift thêm item vào đầu mảng :" + arr);

arr.pop();
console.log("Dùng pop xóa item cuối mảng :" + arr);

arr.shift();
console.log("Dùng pop xóa item đầu mảng :" + arr);



const StringArray = ['a', 'b', 'c', 'd']
StringArray.splice(1, 3, 'new b ', 'new c', 'new d');
console.log("Dùng splice thay thế  item 1 đên 3 vào mảng :" + StringArray);


const slicedArr = StringArray.slice(1, 4);
console.log("Dùng slice Sao chép từ index 1 đến 3 của  mảng StringArray : " + slicedArr);

console.log("Dùng indexOf Sao chép từ index 1 đến 3 của  mảng StringArray : " + arr.indexOf(2));

console.log("Dùng indexOf Sao chép từ index 1 đến 3 của  mảng StringArray : " + arr.lastIndexOf(2));

console.log("Dùng find để tìm phần tử đầu tiên thỏa mãn điều kiện trong mảng StringArray : " + StringArray.find(item => item.startsWith('new')));


console.log("Dùng findIndex để tìm chỉ số của phần tử 'new c' trong mảng StringArray : " + StringArray.findIndex(item => item === 'new c'));


const mappedArr = StringArray.map(item => item.toUpperCase());
console.log("Dùng map để chuyển tất cả phần tử thành chữ hoa trong mảng StringArray: " + mappedArr);


const filteredArr = StringArray.filter(item => item.startsWith('new'));
console.log("Dùng filter để lọc các phần tử bắt đầu bằng 'new' trong mảng StringArray: " + filteredArr);

// const numArr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Dùng reduce để tính tổng các phần tử trong mảng numArr: " + sum);


const isAnyNew = StringArray.some(item => item.startsWith('new'));
console.log("Dùng some để kiểm tra nếu có phần tử nào bắt đầu bằng 'new': " + isAnyNew);

const isAllNew = StringArray.every(item => item.startsWith('new'));
console.log("Dùng every để kiểm tra nếu tất cả phần tử bắt đầu bằng 'new': " + isAllNew);


const sortedArr = StringArray.sort();
console.log("Dùng sort để sắp xếp mảng StringArray: " + sortedArr);


const reversedArr = StringArray.reverse();
console.log("Dùng reverse để đảo ngược mảng StringArray: " + reversedArr);


const joinedStr = StringArray.join('-');
console.log("Dùng join để nối các phần tử trong mảng thành chuỗi: " + joinedStr);

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("Dùng concat để nối mảng :" , combined);


console.log("Dùng để kiểm tra xem mảng có phần tử không :")
console.log(arr.includes(2));
console.log(arr.includes(11));

const arrFill= [1, 2, 3, 4];
arrFill.fill(0, 1, 3);
console.log("Dùng fill để thay giá trị item bắt đầu từ index 1 và kết thúc ở 3 :", arrFill);

const arrFlat = [1, [2, 3], [4, 5]];
console.log("Mảng gốc " + arrFlat)
console.log("Dùng flat để chyển mảng con thành mảng 1 chiều :" + arrFlat.flat());


console.log("FlatMap dùng như map nhưng item sẽ đc làm phẳng một cấp độ :" + arr.flatMap(x => [x, x * 2]));

const arrFrom = Array.from('hello');
console.log( "Form ạo một mảng mới từ một đối tượng giống mảng hoặc một iterable : " + arrFrom);
