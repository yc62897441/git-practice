const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/branch1', (req, res) => {
  res.render('branch1')
})

app.listen(PORT, () => {
  console.log(`Express router is running on http://localhost:${PORT}`)
})
