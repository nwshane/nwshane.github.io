const express = require('express')
const app = express()

app.use(express.static('public'))

const getPort = () => process.env.PORT || 8000
console.log(`Running static app at port ${getPort()}`)
app.listen(getPort())
