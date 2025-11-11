const fs = require('node:fs/promises')

fs.readFile ('./archivo.txt', 'utf-8')
.then(text => {
    console.log('primer texto: ', text)
})


console.log('estoy haciendo cosas mientras se lee el archivo')

fs.readFile ('./archivo2.txt', 'utf-8')
.then(text => {
    console.log('segundo texto: ', text)
})