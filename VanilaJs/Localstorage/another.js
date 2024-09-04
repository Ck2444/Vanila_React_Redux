// 100 строк
// если ошибка не поймана в try catch то она останавливает выполнение кода

// SyntaxError
// Синтаксическая ошибка - все что связано с ковычками запятыми скобками и точками, точка запятыми
const arr = [1, 23, 2]
// TypeError -> применить какое действие к другому типу
const num = [3]
num.forEach((value) => console.log(value))

console.log('код после ошибки')
// Reference Error
// sum(2, 3)
// const sum = (a, b) => a + b

// console.log(a)
// const a = 1
const submitForm = document.createElement('form')
submitForm.addEventListener('submit', () => console.log('sad'))

let receivables = 10
let payables = 8
let netWorkingCapital = receivables - payables
console.log(`Net working capital is: ${netWorkingCapital}`)

let arraySum = myArray.reduce((previous, current) => previous + current)
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>"

//
let x = 7
let y = 9
let result = 'to come'
// присваивание =
// оператор строгого сравнения  ===
if (x === y) {
  // исправили
  result = 'Equal!'
} else {
  result = 'Not equal!'
}

//
function getNine() {
  let x = 6
  let y = 3
  return x + y
}

let result1 = getNine() // добавляем круглые скобки для вызова функции
console.log(result1)
