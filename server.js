var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function (request, response) {
  response.render('pages/index', {
    sandwiches: sandwiches
  })
})

app.get('/cold', function (request, response) {
  response.render('pages/cold', {
  })
})

app.get('/hot', function (request, response) {
  response.render('pages/hot', {
  })
})

app.get('/winner', function (request, response) {
  response.render('pages/winner', {
  })
})

app.listen(port)

var sandwiches = {}

function createSandwich (sandwich) {
  var id = Object.keys(sandwiches).length
  sandwich.createdAt = new Date()
  sandwiches[id] = sandwich
}

createSandwich({
  title: 'Ham and Cheese',
  content: 'Ham and cheese between 2 pieces of bread.'
})
createSandwich({
  title: 'Turkey and Cheese',
  content: 'Turkey and cheese between 2 pieces of bread.'
})
createSandwich({
  title: 'Banana and Peanut Butter',
  content: 'Banana slices and peanut butter between 2 pieces of bread.'
})
createSandwich({
  title: 'BLT',
  content: 'Bacon, lettuce, tomato and mayo on a grilled bun. '
})
