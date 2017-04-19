var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('public'))

app.set('view engine', 'ejs')

var navbars = {}

createNavbar({
  title: 'Home',
  link: '/',
  template: 'pages/index'
})
createNavbar({
  title: 'Best Cold Sandwich',
  link: '/cold',
  template: 'pages/winner',
  name: 'Subway Italian Hero',
  text: 'Here is the nutrition facts!!',
  url: 'http://www.subway.com/MenuNutrition/Menu/Product?ProductId=5814&MenuCategoryId=1&MenuTypeId=1',
  img_url: '/img/subway.jpg',
  ingredients: 'Spicy Capicola, Mortadella, Genoa Salami, Provolone, Mediterranean oregano, Italian Bread, Oil, and Red wine vinegar'
})
createNavbar({
  title: 'Best Hot Sandwich',
  link: '/hot',
  template: 'pages/winner',
  name: 'Philly Cheesesteak',
  text: 'Find the best ones here!!',
  url: 'http://steakhousephilly.com',
  img_url: '/img/cheesesteak_image.jpg',
  ingredients: 'Provolone, Boneless beef short ribs, Peppers, Onions, and Sub Bun'
})
createNavbar({
  title: 'All Time Winner',
  link: '/winner',
  template: 'pages/winner',
  name: 'PB & J',
  text: 'This is my favorite peanut butter!!',
  url: 'http://www.jif.com/products/peanut-butter/peanut-butter-and-honey',
  img_url: '/img/pbj.jpg',
  ingredients: '2 pieces of bread, Strawberry Jelly, and Peanut Butter'
})

Object.keys(navbars).forEach(function (id) {
  app.get(navbars[id].link, function (request, response) {
    response.render(navbars[id].template, {
      navbars: navbars,
      pageinfo: navbars[id]
    })
  })
})

app.listen(port)

function createNavbar (navbar) {
  var id = Object.keys(navbars).length
  navbar.createdAt = new Date()
  navbars[id] = navbar
}
