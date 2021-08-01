const express = require('express')
const path = require('path')
const app = express()

const rutasMain = require('./routers/main')

app.use('/', rutasMain)

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'home.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })
 app.listen(3030, () => {
     console.log('Servidor funcionando.')
 })