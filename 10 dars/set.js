// const set = new Set ()

// set.add('Amir Temur')
// set.add('Abdulhamidhon 2')
// set.add('Xusayn ibn Ilhomjon')
// set.add(' Yazid')

// console.log(set.has('Abdulhamidhon 2'));
// console.log((set.has('Mehmet')));

// set.delete('Yazid')
// console.log(set.has('Yazid'))

// console.log(set.size)

// set.forEach((value) => {
//     console.log(value);
    
// } )


const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple']
const fruitCount = new Map()

fruits.forEach((fruit) => {
    fruitCount.set(fruit, (fruitCount.get(fruit) || 0 ) + 1 )
})
console.log(fruitCount);

