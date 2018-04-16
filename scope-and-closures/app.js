;

// function foo(a) {
//   var b = a;
//   console.log(a);
// }

// var c = foo(2);

// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }

//   var b;

//   b = a + doSomethingElse(a * 2);

//   console.log(b * 3);
// }

// doSomething(2);

// var a = 2;

// (function foo() {
//   var a = 3;
//   console.log(a);
// })();

// console.log(a);

// var foo = true;

// if (foo) {
//   let bar = foo * 2;
//   bar = something(bar);
//   console.log(bar);
// }
// console.log(bar);

// foo();

// var foo;

// function foo() {
//   console.log(1);
// }
// foo = function () {
//   console.log(2);
// };

// function foo() {
//   console.log(3);
// }
// var fn;

// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz;
// }
// function bar() {
//   fn();
// }
// foo();
// bar();

// for (var i = 1; i <= 5; i++) {
//   (function() {
//     var j = i;
//     setTimeout( function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// var foo = (function CoolModule() {
//   let something = 'cool';
//   let another = [1, 2, 3];

//   function doSomething() {
//     console.log(something);
//   }
//   function doAnother() {
//     console.log(another.join(' ! '));
//   }

//   return {
//     doSomething,
//     doAnother,
//   };
// })();

// // var foo = CoolModule();

// foo.doSomething();
// foo.doAnother();

// var foo = (function CoolModule(id) {
//   function change() {
//     publicAPI.identify = identify2
//   }
//   function identify1() {
//     console.log(id);
//   }
//   function identify2() {
//     console.log(id.toUpperCase());
//   }
//   var publicAPI = {
//     change: change,
//     identify: identify1
//   }
//   return publicAPI;
// })('foo module');

// foo.identify();
// foo.change();
// foo.identify();

// // var foo1 = CoolModule('foo 1');
// // var foo2 = CoolModule('foo 2');

// // foo1.identify();
// // foo2.identify();

// var MyModules = (function Manager() {
//   var modules = {};

//   function definte(name, deps, impl) {
//     for (var i = 0; i < deps.length; i++) {
//       deps[i] = modules[deps[i]];
//     }
//     modules[name] = impl.apply(impl, deps);
//   }
//   function get(name) {
//     return modules[name];
//   }
//   return {
//     define: define,
//     get: get
//   };
// })();


