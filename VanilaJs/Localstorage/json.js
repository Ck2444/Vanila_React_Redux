console.log('hello' + user)

console.log(Object.toString({ name: 'peter' }))

console.log(user.name)
console.log(String(user))

// LS - все данные в строковом режиме
// общаем с сервером и LS через строки string (текстовый формат)
// чтобы передать объект или массив
// мы должны использовать JSON формат
// JSON строка которая выглядит как объект

const user = {
  name: 'peter',
  email: '@maiu',
  adress: {
    city: 'berlin',
  },
}
const userToJSON = JSON.stringify(user)
console.log(userToJSON)

const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
  { title: 'Book 4', author: 'Author C' },
]
const booksToJSON = JSON.stringify(books)
console.log(booksToJSON)
console.log(typeof booksToJSON)

const fromJSONtoArray = JSON.parse(booksToJSON)
console.log(fromJSONtoArray)
console.log(typeof fromJSONtoArray)
