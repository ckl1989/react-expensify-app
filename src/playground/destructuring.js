// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'SF',
//         temp: 92
//     }
// }

// const {name = "Anonymous", age} = person;

// console.log(`${name} is ${age}`)

// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }


//
// Array Destructuring
//
const address = ['1299 S Juniper Street', 'Philadelphia', 'CA', '94919'];

const [, city, state='WA'] = address;

console.log(`You are in ${city} ${state}`);