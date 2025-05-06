
console.log(a);  // hoisting của var(undefined)  
show(); //  Hàm định nghĩa hoisting đầy đủ, nên có thể gọi show() trước khi khai báo
var a = 10 ;
console.log(global.a); // khi tạo bằng var trong phạm vi toàn cục  nó trở thành thuộc tính của đối tượng global trong Node.js hoặc window trong trình duyệt

let b = 10; //cũng là biến toàn cục nhưng không trở thành thuộc tính của global hoặc window

console.log(a);
function show()  {
    console.log(a); // vì a đc khởi tạo bằng var nên cơ chế hoisting sẽ đọc thành undefined
    let b = 10; // b đc khởi tạo bằng let nên sẽ bị lỗi ở đây do dùng hoisting tạo trước khai báo lại để tránh lỗi
    a = 10 ; // gán lại để xử lý hoisting vì khi hoisting biến khái báo bằng var sẽ thanh undefined
    if(a > 5) {
        //block scope
        a = 30; //a có phạm vi hoạt động trong một hàm nên các biến a trong hàm sễ thay đổi giá trị theo
        // nếu var a = 30 và  let b = 40; trong đây thì không dùng đc biến toàn cục
         b = 40;// b có phạm vi hoạt động trong khối nên chỉ trong khối với bị thay đổi
        console.log(a,b); // đầu ra 30 ,40 
    }
    console.log(a,b); //đầu ra 30 10
}
show();
