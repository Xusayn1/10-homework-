// let son1 = prompt('1 chi soni kiriting')
// let son2 = prompt('2 chi soni kiriting')
// if (son1 > son2){
//     alert('1st number is bigger than 2nd')
// } else if (son2 > son1 ) {
//     alert('2nd number is bigger than 2nd')
// }

// 2 task 

// let number = prompt(' enter the number')
// if (number < 0) {
//     alert('number is negative')
// } else if (number > 0) {
//     alert('number is positive')
// } else if (number = 0) {
//     alert(' number is equal to 0')
// } 

// 3 task 

// let number1 = parseFloat(prompt(' enter 1st number '))
// let number2 = parseFloat(prompt(' enter 2nd number '))
// let amal = prompt('enter any amal') 
// switch (amal) {
//     case '+':
//         alert(number1 + number2)
//         break
//     case '-':
//         alert(number1 - number2)
//         break
//     case '*':
//         alert(number1 * number2)
//         break
//     case '/':
//         if ( number2 !== 0) {
//             alert( number1 / number2)
//         } else if (number1 == 0 || number2) {
//             alert('number is not permissable to divide to 0')
//         }

// } 

// 4 task 
// let son = 5 
// let sum = 1 
// for (let i = 1; i <= son; i++) {
//     sum = sum * i
// }
// alert(sum) 

// task 5 

// let n = 7  
// let a = 0, b = 1
// console.log(b)
// for (let i = 2; i<n; i++) {
//         let next = a + b
//         console.log(next)
//         a = b  
//         b = next
// }

// task 6
// let n = prompt(' enter the number')
// if (n % 2 == 0){
//     alert('number is Even')
// } else if (n % 2 != 0) {
//     alert(' Number is Odd')
// }

// task 7 
// let son = 371 
// let text = String(son) 
// yegindi = 0
// for ( let i = 0; i < text.length; i++ ) {
// let raqam = parseInt(text[i])
// yegindi += Math.pow(raqam,3)
// }
// if (yegindi == son){
//     alert('Numer is armstrong')
// } else if (yegindi != son){
//     alert(' Number is not armstrong')
// }

// task 9 
// let son = parseInt(prompt(' enter the number ')) 
// for (let i = 1; i <= 10; i++ ){
//     let natija = son * i
// console.log(son + " x " + i + " = " + natija);
// }

// task 10 
// let arr = [23, 5, 67, 1, 34]
// let max = arr[0]
// let min = arr[0]
// for (let i = 1; i <= arr.length; i++) {
//     if (i > max) {
//         max = arr[i]
//     }
//     if (i < min ) {
//         min = arr[i]
//     } 
// }
// console.log( max + ' is max number')  
// console.log( min + ' is min number')  

// task 11 

//task 12 

//task 13 
// let arr = [4, 7, 10, 15, 20];
// let sum = 0 
// for (let i = 0; i < arr.length; i++ ) {
//     if (i % 2 ==0) {
//        sum += arr[i]
//     } 
// }
// alert(sum) 

// task 20 
let score = parseInt(prompt('enter the number'));

if (score > 0 && score <= 25) {
    alert('F');
} else if (score > 25 && score <= 45) {
    alert('D');
} else if (score > 45 && score <= 65) {
    alert('C');
} else if (score > 65 && score <= 85) {
    alert('B');
} else if (score > 85 && score <= 100) {
    alert('A');
}

