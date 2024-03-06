// є масив
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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

for (let user of users ) {
    if (user.age > 30) {
        console.log( user)
    }
}

for (let user of users) {
   if ( user.status === false) {
        console.log(user)
    }
}

for (let user of users) {
    if ( user.status === true) {
        console.log(user)
    }
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)






// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

for (let product of products) {
    document.write( ` <div class="product-card">
 <h3> ${product.title}  ${product.price}</h3>
 <img src="${product.image}" alt="">
</div>`)
}






// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900,1000]


for (let number of numbers) {
    document.write(`<div> ${number} </div>`)

}




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let colors = ['red', 'blue', 'pink', 'white', 'aquamarine', ' green', 'olive', 'brown', 'black', 'purple']

for (let i = 0; i < 20; i++) {
    const color = colors[i];
     document.write( `<div> ${color} ${i}</div>`)
}



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let cats = ['cat1', 'cat2','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9','cat10','cat12','cat11','cat13','cat14','cat15','cat16','cat17','cat18','cat19','cat20']
let i = 0
while ( i < cats.length) {
    let cat = cats[i]
    document.write( `<h1> ${cat}</h1>`)
i++
}




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let pets = ['cat1', 'cat2','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9','cat10','cat12','cat11','cat13','cat14','cat15','cat16','cat17','cat18','cat19','cat20']
 i = 0
while ( i<  pets.length) {
    let pet = pets[i]
    document.write(`<div><h1>${pet}</h1> ${i} </div>`)
    i++
}

