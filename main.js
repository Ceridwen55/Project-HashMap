import { HashMap } from './hash.js';

const myMap = HashMap();  

myMap.set('name', 'Antonia');
console.log(myMap.get('name'));  

myMap.set('age', 28);
console.log(myMap.entries());  

console.log(myMap.keys());  
console.log(myMap.values());  

myMap.remove('name');
console.log(myMap.get('name'));  