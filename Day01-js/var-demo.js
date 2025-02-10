var x=100; // Global
function varDemo(){
    console.log("x ben trong ham:",x);
}

// 
console.log("x bên ngoai ham:",x);

// thực thi ham:
varDemo();


// local
var y;
function fn_demo(){
    y=200; //local 
    console.log("y ben trong hàm:", y);
}
fn_demo();
// y bên ngoài hàm
console.log("y bên ngoài hàm:", y); // ==error: ReferenceError: y is not defined


// ví dụ: ChatGPT / DeepSeek