const path = require('path')
const fs = require('fs')
const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const layouts = require('handlebars-layouts')

const app = express()
exphbs.create({
    layoutsDir: path.join(__dirname, '../../views/layouts'),
    partialsDir: path.join(__dirname, '../../views/components')
})
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../../views/'))
app.use(express.static(path.join(__dirname, '../../public')))
app.use('/mdbootstrap', express.static(path.join(__dirname, '../../node_modules/mdbootstrap')))

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('layout', fs.readFileSync(path.join(__dirname, '../../views/layouts/main.handlebars'), 'utf8'));

// Routes
require('../api/index')(app, handlebars)

app.listen(3000, () => {
    console.log('Application is up and running on port 3000.')
})
