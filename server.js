const express = require('express')
const app = express()

const port = process.env.PORT || 420

let visitCount = 0
app.use('/', (req, res, next) => {
    visitCount++
    console.log(visitCount)
    next()
})

app.use('/', express.static('./src'));

app.listen(port, () => {
    console.log(`Servidor a correr na porta :${port}`)
})
