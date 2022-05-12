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
  console.log('branch1 update 2022/5/12 09:52')
  console.log('branch1 update 2022/5/12 10:08 insert this to line')
  console.log('branch1 update 2022/5/12 10:17 insert this to line')
  res.render('branch1')
})

app.get('/branch2', (req, res) => {
  res.render('branch2')
})

app.listen(PORT, () => {
  console.log(`Express router is running on http://localhost:${PORT}`)
})
