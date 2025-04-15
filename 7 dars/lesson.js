// function add(a, b) {
//     console.log(this);
//     return a + b + this.x + this.y
// }
// // add(1,2)

// const obj = {
//     x: 12,
//     y: 55,
// }
// console.log(add.call(obj, 1, 2))

// const person = {
//     firstName: 'Abdulhamdihon',
//     lastName: 'Abdulmajidov',
// }
// const human = {
//     firstName: 'Temur',
//     lastName: 'Taragay',
// }

// function greet(greeting) {
//     console.log(`${greeting}, ${this.firstName} ${this.lastName} !`)
// }
// greet.call(person, 'Peace be upon you')                       for call
// greet.call(human, 'Hola amigos')

// const person = {
//     firstName: 'Abdulhamdihon',
//     lastName: 'Abdulmajidov',
// }
// function greet(wish, message){
//     return `${this.firstName}, ${wish}. ${message}`
// }
// let result = greet.apply(person,['Good moorning', "what's up dude"])           for apply
// console.log(result);

const student1 = {
    name: 'Jack ',
    grade: ' 5',
    introduction: function () {
        console.log(this.name + 'studies in grdae' + this.grade + '.');    
    }
}
 const student2 = {
    name: 'Cristiano ',
    grade: ' 6'
 }

// let result = student1.introduction.bind(student2) 
let result = student1.introduction() 
// result()