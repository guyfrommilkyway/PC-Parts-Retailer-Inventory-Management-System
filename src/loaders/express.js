const path = require('path')
const fs = require('fs')
const express = require('express')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const layouts = require('handlebars-layouts')

// Initialize express
const app = express()

// Setup
app.engine('hbs', exphbs({
    layoutsDir: path.join(__dirname, '../../views/layouts'),
    partialsDir: path.join(__dirname, '../../views/partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../../views'))
app.use(express.static(path.join(__dirname, '../../public')))
app.use('/mdbootstrap', express.static(path.join(__dirname, '../../node_modules/mdbootstrap')))

// Handlebars layouts
handlebars.registerHelper(layouts(handlebars));

// Main layout
handlebars.registerPartial('main', fs.readFileSync(path.join(__dirname, '../../views/layouts/main.hbs'), 'utf8'));
// Client layout
handlebars.registerPartial('layout-client', fs.readFileSync(path.join(__dirname, '../../views/layouts/client/layout.hbs'), 'utf8'));
// Admin layout
handlebars.registerPartial('layout-admin', fs.readFileSync(path.join(__dirname, '../../views/layouts/admin/layout.hbs'), 'utf8'));

// Routes
require('../api/index')(app, handlebars)

app.listen(3000, () => {
    console.log('Application is up and running on port 3000.')
})