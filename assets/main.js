 let p=fetch('https://jsonplaceholder.typicode.com/users') // method = GET;
   .then(response => response. json ())
   .then(json => console. log (json));
console. log (p);


// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


// function compareTwoNumbers(a: number, b: number): CustomBooLean {
//   return a === b ? 'yeah' : 'nah`;
// }


// interface ISnake{
//    id: number;
//   name: string;
//    age: number;
//   owner?: string;
//   typeId: number;
// };
//  let cat: ICat ={}
//    id: 1,
//   name: 'Jerry',
//   age:
//}