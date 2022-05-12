const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  console.log('main update 2022/5/12 10:10 insert this line')
  res.render('index')
})

app.get('/branch1', (req, res) => {
  console.log('branch1 update 2022/5/12 09:52')
  res.render('branch1')
})

app.get('/branch2', (req, res) => {
  console.log('branch3 update 2022/5/12 09:55 insert this to line 20')
  console.log('branch3 update 2022/5/12 09:55 insert this to line 21')
  res.render('branch2')
})

app.listen(PORT, () => {
  console.log(`Express router is running on http://localhost:${PORT}`)
})
