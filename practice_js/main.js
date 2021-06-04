const animals = [
  { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
  { name: 'monkey', size: 'medium', isAggressive: true, weight: 20 },
  { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
  { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
];

// animals.forEach(function (animal, index) {
//   console.log(`${index} ${animal.size}`);
// });

// //map을 사용하면 새로운 배열 재생산
// const animalsNames = animals.map(function (animal) {
//   return `${animal.name} is ${animal.size}`;
// });

// console.log(animalsNames);

// // filter
// const smallAnimals = animals.filter(function (item) {
//   return item.size === 'small';
// });

// console.log(smallAnimals);

// reduce
const totalweight = animals.reduce(function (acc, cur) {
  return acc + cur.weight;
}, 0); //0은 초기값
console.log(totalweight);

// const numbers = [1, 10, 15, 23, 123];

// const total = numbers.reduce(function (sum, number) {
//   console.log(sum, number);
//   return sum + number;
// });

// console.log(total);