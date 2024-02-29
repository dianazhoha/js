 // Масиви та об'єкти:
 // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
  let arr;
arr = [ 'one', 'two', 3 , 4 , 5 , 'six' , 7 , 8 , "nine" , 0];
console.log( arr[0]);
 console.log( arr[1]);
 console.log( arr[2]);
 console.log( arr[3]);
 console.log( arr[4]);
 console.log( arr[5]);
 console.log( arr[6]);
 console.log( arr[7]);
 console.log( arr[8]);
 console.log( arr[9]);


 // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.!!!!!!!!!!

 let book1 = {
     title: 'Fountainhead',
     pageCount: 673,
     genre: 'roman'
 }


 let book2 = {
     title: 'abetka',
     pageCount: 123,
     genre: 'science'
 }

 let book3 = {
     title: 'why do we sleep',
     pageCount: 677,
     genre: 'science'
 }



 // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book01 = {
     title: 'Kateryna',
    pageCount: 673,
    genre: 'poem',
    authors: [{
        name: 'T. Shevcenko',
        age: 35,
    }]
};
// console.log(book01)

 let book02 = {
     title: 'why do we sleep',
     pageCount: 788,
     genre: 'science',
     authors: [{
         name: 'M. Woker',
         age: 78,
     }]
 };

 let book03 = {
     title: 'Green lights',
     pageCount: 800,
     genre: 'biography',
     authors: [{
         name: 'M. Mcconaughey',
         age: 56,
     }]
 };
 // console. log(book02)
 // console.log(book03)


 // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

 let users = [
     { name: 'diana',
         username: 'diana123',
         password: 24729,
     },

     { name: 'anna',
         username: 'world387',
         password: 24729
     },
     { name: 'arthur',
         username: 'mainjs11',
         password: 'fyd444jfk'
     },
     { name: 'andriy',
         username: 'for77',
         password: 'fghjdf777',
     },

     { name: 'nazar',
         username: 'litavra78',
         password: 767394000,
     },

     { name: 'olya',
         username: 'cello667',
         password: 'rrrrrrrr',
     },

     { name: 'ira',
         username: '1111fno',
         password: 'fjkjhdf7h',
     },

     { name: 'dima',
         username: 'violin7890',
         password: 12345678900000,
     },
     { name: 'ivan',
         username: 'conductor1',
         password: 'hhhhhhhhhhh11',
     },
     { name: 'okten',
         username: 'school1',
         password: 'fpfpfp000',
     },
 ]
 console.log( users.length);

 console.log( users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,);
console.log(users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);


 // Логічні розгалуження:
 //     - Є змінна х, якій ви надаєте довільне числове значення.
 //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 11
 if (x !== 0 ) {console.log('correct')}
 x = 1
 {console.log(x !== 0 ) }
 x = 0
 {console.log(x !== 0 ) }
x = -3
 {console.log(x !== 0 ) }





 // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
 console.log(coursesAndDurationArray);
 if (coursesAndDurationArray[0].monthDuration > 5){console.log ('super')}
 if (coursesAndDurationArray[1].monthDuration > 5){console.log('super')}
  if (coursesAndDurationArray[2].monthDuration > 5){console.log('super')}
  if (coursesAndDurationArray[3].monthDuration > 5) {console.log('Super')}
  if (coursesAndDurationArray[4].monthDuration > 5){console.log('super')}
  if (coursesAndDurationArray[5].monthDuration > 5) {console.log('super')}







 // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
 // (в першу, другу, третю или четверту частину години).

 let time = 11
 if(time >0 && time <= 15) {console.log('first quater')}
 else if (time >0 && time <= 30 ) {console.log('second quater')}
else if (time >0 && time<= 45) { console.log('third quater')}
else if (time >0 && time <= 59){console.log('fourth quater')}







 // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11
 if (day <= 10 ) {console.log('1st')}
  else if (day <= 20) {
     console.log('2nd')
 }
else if (day <= 31) {console.log('3d')}






 // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

 switch (9) { case '1': console.log('monday')
     break;
     case 1: console.log('tuesday')
         break;
     case 3:console.log('wednesday')
         break;
     case 4: console.log('thursday')
         break;
     case 5:console.log('friday')
         break;
     case 6: console.log('saturday')
         break;
     case 7 : console.log( 'sunday')
         break;
     default :
         console.log(' ')
}

 // ?? тут питання до завдання - це якщо я визначила яке число більше то по факту вивела максимальне?
 //  - Користувач вводить або має два числа.
 //         Потрібно знайти та вивести максимальне число з тих двох .
 //         Також потрібно врахувати коли введені рівні числа.

 let a = 7
 let b = 89
 if ( a < b ) { console.log( a < b )
 }



 // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

