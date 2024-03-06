// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


function calc(a, b) {
    return ( a * b)
}
let s = calc(15, 3 )
console.log( s)








// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calc1 (p, r){
    return (p * r)
}
 let s1 = calc1( 3.14, 15)
console.log(s1)






// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calc2 ( h, r, p=3.14){
    return( (2 * p) * h * r )
}
let s2 = calc2 (  15,7)
console.log(s2)






// - створити функцію яка приймає масив та виводить кожен його елемент

let products = [
    {title: 'milk', price: 22},
    {title: 'juice', price: 27},
    {title: 'tomato', price: 47},
    {title: 'tea', price: 15}
]

function plan (products){
    document.write(`
    <div>
    <p> title: ${products.title} price: ${products.price}</p>
</div>
    `)
}

for (const product of products) {
    plan(product)
}







// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text ( p){
    document.write(`
<p> ${ p}</p>

    `)
}
text( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem consectetur, corporis deserunt exercitationem ipsa laboriosam modi nulla obcaecati optio perferendis quos ratione saepe sequi temporibus! Id numquam possimus vel.')







// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write(`<ul>`)
function list (txt){ document.write(`
<li> ${txt}</li>
<li> ${txt}</li>
<li> ${txt}</li>`)
}
document.write(`</ul>`)
 list( 'Lorem ipsum dolor ')










// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write(`<ul>`)
function list1 (textForLi, count = 3 ){
    for (let i = 0; i < count; i++) {
document.write(`<div>
<li> ${textForLi}</li>
</div>`)
    }
}
document.write(`</ul>`)
 list1('Lorem ipsum dolor.')













// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
document.write( `<ul>`)

function  fnUsers(users){

    document.write(`<div>
<h2> ${users.name} ${users.age} ${users.status}</h2>
</div>`)

}
for (const user of users) {
    fnUsers (user)

}
document.write( `</ul>`)









// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objects = [
    {id: 0,name: 'vasya', age: 31 },
    {id:1,name: 'petya', age: 30},
    {id:2, name: 'kolya', age: 29},
    {id:3, name: 'olya', age: 28},
    {id:4,name: 'max', age: 30},
    {id :5, name: 'anya', age: 31}
]
function fnObjects (objects) {
    document.write(`<div>
<span> ${objects.id }  ${objects.name}  ${objects.age}</span>
</div>`)
}

for (const object of objects) {
    fnObjects(object)

}







// - створити функцію яка повертає найменьше число з масиву

let numbers =[ 22, 56, 105, 3,55, 78, 90,9]
 function  minMax (numbers){
    let min = numbers[0]
     let max = numbers[0]

     for (let number of numbers) {
         if ( number < min){
             min = number;
         }
         else if ( number > max){
             max = number;
         }
     }
   return min
 }

let result = minMax(numbers)
console.log(result)










// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arr = [1,2,10]
 function sum (arr) {
    let sum1 = 0
     for (let i = 0; i < arr.length; i++) {
sum1 = sum1 + arr[i]
     }
     return sum1
}
let res = sum(arr)
console.log(res)






// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let array = [10, 20 , 30,40]

function swap (arr, index1, index2 ) {
    let  num = arr [index1]
    arr[index1] = arr[index2]
    arr[index2] = num
    return arr
}
 let result1 = swap(array, 0, 1)
console.log(result1)






// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let money  = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'PLN',value:10},

]
function change (arr, sumUAH, currency){
    for (const moneyElement of money) {
        if (moneyElement.currency === currency){
            console.log(sumUAH / moneyElement.value)
        }
    }

}
change(money, 1000, 'USD' )




