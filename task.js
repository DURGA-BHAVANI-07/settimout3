// function a(x){
//     console.log(x());
// }
// a(function b(){
//     console.log("bhavani")
// })

// setTimeout (() =>{
//     alert("ordered")
// },1000)

// setTimeout(() => {
//   alert("shipped to nearest hub");
// }, 10000);

// setTimeout(() => {
//   alert("delivery person out for the delivery");
// }, 12000);

// setTimeout(() => {
//   alert("delivery person out for the delivery");
// }, 15000);


// function boilWater(callback) {
//   setTimeout(() => {
//     console.log("Boiling water...");
//     callback();
//   }, 1000);
// }

// function brewCoffee(callback) {
//   setTimeout(() => {
//     console.log("Brewing coffee...");
//     callback();
//   }, 1000);
// }

// function addMilkAndSugar(callback) {
//   setTimeout(() => {
//     console.log("Adding milk and sugar...");
//     callback();
//   }, 1000);
// }

// function serveCoffee(callback) {
//   setTimeout(() => {
//     console.log("Serving coffee...");
//     callback();
//   }, 1000);
// }

// boilWater(() => {
//   brewCoffee(() => {
//     addMilkAndSugar(() => {
//       serveCoffee(() => {
//         console.log("Coffee is ready to enjoy!");
//       });
//     });
//   });
// });


// function requestUber(callback) {
//   setTimeout(() => {
//     console.log("Requesting an Uber...");
//     callback();
//   }, 1000);
// }

// function waitForDriver(callback) {
//   setTimeout(() => {
//     console.log("Waiting for the driver...");
//     callback();
//   }, 1000);
// }

// function getInCar(callback) {
//   setTimeout(() => {
//     console.log("Getting in the car...");
//     callback();
//   }, 1000);
// }

// function reachDestination(callback) {
//   setTimeout(() => {
//     console.log("Reached destination!");
//     callback();
//   }, 1000);
// }

// requestUber(() => {
//   waitForDriver(() => {
//     getInCar(() => {
//       reachDestination(() => {
//         console.log("You have arrived at your location.");
//       });
//     });
//   });
// });

// function brushTeeth(callback) {
//   setTimeout(() => {
//     console.log("Brushing teeth...");
//     callback();
//   }, 1000);
// }

// function packBag(callback) {
//   setTimeout(() => {
//     console.log("Packing school bag...");
//     callback();
//   }, 11000);
// }

// function putOnShoes(callback) {
//   setTimeout(() => {
//     console.log("Putting on shoes...");
//     callback();
//   }, 13000);
// }

// brushTeeth(() => {
//   packBag(() => {
//     putOnShoes(() => {
//       console.log("Ready for school!");
//     });
//   });
// });


// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// const person1 = new Person("Alice");
// const person2 = new Person("Bob");

// person1.greet(); 
// person2.greet(); 


function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); 
person2.greet(); 



