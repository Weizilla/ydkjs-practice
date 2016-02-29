// Chapter 2: Into JavaScript
// https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md

// types
var a;
console.log(typeof a);
a = "hello world";
console.log('"hello world": ' , typeof a);
a = 42;
console.log("42: ", typeof a);
a = true;
console.log("true: ", typeof a);
a = null;
console.log("null: ", typeof a);
a = undefined;
console.log("undefined: ", typeof a);
a = { b: "c" };
console.log("obj: ", typeof a);

// objects
var obj = {
    a: "hello world"
};
console.log("obj access: ", obj.a);
console.log("obj access: ", obj["a"]);

// arrays
var arr = ["hello", 42, true];
console.log("arr 0: ", arr[0]);
console.log("arr 1: ", arr[1]);
console.log("arr 2: ", arr[2]);
console.log("len: ", arr.length);

// functions
function foo() {
    return 42;
}

foo.bar = "hello world";
console.log("typeof foo: ", typeof foo);
console.log("typeof foo(): ", typeof foo());
console.log("foo.bar: ", foo.bar);
console.log("typeof foo.bar: ", typeof foo.bar);

// Coercion
var b = "42";
console.log("b: ", b);
var b2 = Number(b);
console.log("b2: ", b2);
console.log("==: ", (b == b2));
console.log("===: ", (b === b2));

// truthy
function isTruthy(obj) {
    if (obj) {
        console.log("true: ", obj);
    } else {
        console.log("false: ", obj);
    }
}
isTruthy("");
isTruthy(0);
isTruthy(null);
isTruthy(undefined);
isTruthy([]); // empty is still considered true
isTruthy({}); // empty is still considered true

// equality
console.log('"42" == 42: ' , ("42" == 42));
// array is coerced into comma delimited string
console.log("['a','b','c'] == 'a,b,c': ", (['a', 'b', 'c'] == "a,b,c"));

// hoisting
c = 44;
console.log("c: ", c);
var c;
console.log("c: ", c);
x(); // appears before declaration
function x() {};

// scoping
function foo() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log(a, b, c);
        }
        baz();
        console.log(a, b)
    }
    bar();
    console.log(a);
}
foo();

// functions as values
var foo3 = function foo2(name, val) {
    if (val == 1) {
        console.log("inside", name);
        return
    }
    foo2(name, 1); // foo2() is available here
};
//foo2() // foo2() is undefined here
foo3("foo3"); // foo3 is defined here

// immediately invoked function expressions
var d = 10;
(function iife() {
    var d = 20; // d is in private scope
    console.log("hello iife", d);
})();
console.log(d);

// closure
function makeAdder(x) {
    function add(y) {
        return y + x;
    }
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log("plusOne(4)", plusOne(4));
console.log("plusTen(4)", plusTen(4));

// modules
function User() {
    var username;
    var password;

    function doLogin(user, pass) {
        username = user;
        password = pass;

        console.log("logging in with", username, "and", password);
    }

    return {
        login: doLogin
    };
}

var fred = User();
fred.login("fred", "hunter2");

// this
function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

console.log("foo():"); foo(); // undefined as "this" refers to global obj. Will thrown an error if using strict mode
console.log("obj1.foo():"); obj1.foo();
console.log("foo.call(obj2):"); foo.call(obj2);
console.log("new foo():"); new foo(); // returns empty object

//prototypes
var foo = {
    a: 42
};
var bar = Object.create(foo); // bar's prototype is linked to foo obj
bar.b = "hello world";
console.log("bar.b:", bar.b);
console.log("bar.a:", bar.a);

