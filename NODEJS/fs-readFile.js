const fs = require('node:fs')

fs.readFile ('./archivo.txt', 'utf-8', (err, text) => {
console.log('Primer texto: ', text)})

console.log('estoy haciendo cosas mientras se lee el archivo')

fs.readFile ('./archivo2.txt', 'utf-8', (err, text) => {
console.log('Segundo texto: ', text)})