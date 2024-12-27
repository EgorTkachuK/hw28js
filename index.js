





// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval.
//  Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.


// let mesNum = 0 

// let timer = setInterval(() => {
    
//     mesNum ++
//     let message = `HI IM MESAGGE NUMBER ${mesNum}`
// console.log(message)

// if(mesNum === 5) {
//     clearInterval(timer)
// }
// }, 1000);





// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, 
// змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

// let blockOne = document.querySelector(".block_one")
// let blockTwo = document.querySelector(".block_two")
// let intervalCount = -1

// let timer = setInterval(() => {
//     intervalCount ++


//  if(intervalCount === 2) {
//     blockTwo.style.marginLeft = "150px"

// } else if (intervalCount === 3) { 
//     blockOne.style.width = "150px"
//     blockOne.style.height = "150px"
    
// } else if (intervalCount === 4) {
//     blockTwo.style.width = "300px"
//     blockTwo.style.height = "300px"
// } else if (intervalCount === 5) {
//     blockTwo.style.marginLeft = "0px"
// } else if (intervalCount === 6 ) {
//     intervalCount = 0 
// } else if (intervalCount === 0 ) {
//     blockOne.style.width = "300px"
//     blockOne.style.height = "300px"
//     blockTwo.style.width = "150px"
//     blockTwo.style.height = "150px"
// }


// console.log(intervalCount)

// }, 2000);





