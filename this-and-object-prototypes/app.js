'use strict'

// function identify() {
//   return this.name.toUpperCase();
// }
// function speak() {
//   var greeting = "Hello, I'm " + identify.call( this );
//   console.log(greeting);
// }
// var me = {
//   name: "Kyle"
// }
// var you = {
//   name: "Reader"
// };
// identify.call(me);
// identify.call(you);
// speak.call(me);
// speak.call(you);

// function foo(num) {
//   console.log("foo: " + num);
//   this.count++;
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }
// console.log(foo.count);

// function baz() {
//   console.log('baz');
//   bar();
// }
// function bar() {
//   console.log('bar');
//   foo();
// }
// function foo() {
//   console.log('foo');
// }
// baz();

// function foo() {
//   console.log(this.a);
// }
// function doFoo(fn) {
//   fn();
// }
// var obj = {
//   a: 2,
//   foo: foo
// };
// // var obj1 = {
// //   a: 2,
// //   obj2: obj2
// // };
// // obj1.obj2.foo();
// // var bar = obj.foo;
// var a = 'oops, global';
// doFoo(obj.foo);
// // bar();

// function foo() {
//   console.log(this.a);
// }
// var obj = {
//   a: 2
// };
// var bar = function() {
//   foo.call(obj);
// };
// bar();
// // foo.call(obj);
// setTimeout(bar, 100);
// bar.call(window);

// function foo(something) {
//   console.log(this.a, something);
//   return this.a + something;
// }
// var obj = {
//   a: 2
// };
// var bar = function() {
//   return foo.apply(obj, arguments);
// };
// var b = bar(3);
// console.log(b);

// function foo(a) {
//   this.a = a;
// }
// var bar = new foo(2);
// console.log(bar.a);

// function foo(something) {
//   this.a = something;
// }
// var obj1 = {
//   // a: 2,
//   foo: foo
// };
// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a);
// // obj2.foo();
// obj1.foo.call(obj2, 3);
// console.log(obj2.a);
// var bar = new obj1.foo(4);
// console.log(obj1.a);
// console.log(bar.a);
// // obj2.foo.call(obj1);

// function foo() {
//   console.log(this.a);
// }
// var a = 2;
// var o = {a: 3, foo: foo};
// var p = {a: 4};
// o.foo();
// (p.foo = o.foo)();

function foo() {
  console.log("name: " + this.name);
}
var obj = {name: "obj"};
var obj2 = {name: "obj2"};
var obj3 = {name: "obj3"};
var fooOBJ = foo.softBind(obj);
fooOBJ();
obj2.foo = foo.softBind(obj);
obj2.foo();
fooOBJ.call(obj3);
setTimeout(obj2.foo, 10);
