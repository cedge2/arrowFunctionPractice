// translating the code from ES5 into ES 2015 arrow functions

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }


const double = arr => arr.map(val => val * 2);

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = numbers => 
numbers.map(val => val ** 2).filer(square => square % 2 === 0)

// good video on converting to arrow functions > https://youtu.be/h33Srr5J9nY