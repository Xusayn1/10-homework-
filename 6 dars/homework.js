// let pizza = [
//     {
//         id: 1,
//         type: 'pisloqli', 
//         size: 'large'
//     },
//     {
//         id: 2,
//         type: 'tovuqli',
//         size: 'meduim'
//     },
//     {
//         id: 3,
//         type: 'qazili',
//         size: 'meduim'
//     }
// ]
// function Order(item, callback){
//     console.log(`${item.id} zakaz tayorlanmoqda`)
//     setTimeout(() => {
//         callback(item)
//     }, item.id * 1000 )
// }

// function Done(checked) {
//     console.log(
//         `${checked.id} - zakaz tayyor boldi\nSize: ${checked.size}, Type: ${checked.type}`
//     )
// }
// pizza.forEach(function(val) {
//     Order(val, Done)
// })

let products = [
    {
        id: 1,
        productName: "MacBook Pro 16-inch",
        basePrice: 30_000_000, 
        payInMonths: 6,      
        monthlyPayment: 0    
      },
      {
        id: 2,
        productName: " Iphone 16 Pro max",
        basePrice: 15_000_000, 
        payInMonths: 9,      
        monthlyPayment: 0    
      },
      {
        id: 3,
        productName: " Samsung Galaxy s24",
        basePrice: 13_000_000, 
        payInMonths: 12,     
        monthlyPayment: 0    
      }
]

function Order() {}

function calculateFinalPrice() {}

function calculateInstallments () {}

function deviceReadyCallback() {}

function orderDevices() {}


// 1 task
// function func1(a){
//     let sum = 0
//     return function (b) {
//         for ( let i =1 ; i <= a; i++) {
//             sum += i ** b 
//         }  
//         console.log(sum);
//     }
// } 
// func1(5)(2)

// 2 task 
// function func1(n) {
//     let sum = 0
//     return function (m) {
//         for (let i = n; i <= m; i++) {
//             let count = 0;
//             for(let j= 1; j <= i; j++){
//                if(i%j == 0) count++
//             }
//             if(count == 2){
//                 console.log(i);
//                 sum+=i;
//             }
//         }
//         console.log(sum)
//     }
// } 
// func1(1)(10) 

// 3 task 
// function isEqual(text1){
//   return function(text2){
//     const sorted1 = text1.split('').sort().join('');
//     const sorted2 = text2.split('').sort().join('');
//     return sorted1 === sorted2;
//   }
// }

// console.log(isEqual("apple")("elppa"));
// console.log(isEqual("apple")("aplep")); 
// console.log(isEqual("apple")("applf")); 
// console.log(isEqual("apple")("appl"));  

// 5 task 
function func(arr) {
  return function(m) {
    let closest = arr[0];
    let minDiff = Math.abs(arr[0] - m);

    for (let i = 1; i < arr.length; i++) {
      const diff = Math.abs(arr[i] - m);
      if (diff < minDiff) {
        minDiff = diff;
        closest = arr[i];
      }
    }

    return closest;
  };
}
console.log(func([16, 8, 2, 1, 5, 9, 3])(6));     
console.log(func([1, 12, 32, 2, 10, 5, 4])(30));  
