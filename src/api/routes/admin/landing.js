const fs = require('fs')
const path = require('path')

module.exports = async (app, handlebars) => {

    // Login
    app.get('/admin/', function (req, res) {

        // Compile template
        var template = handlebars.compile(fs.readFileSync(path.join(__dirname, '../../../../views/pages/admin/index.hbs'), 'utf8'));

        // Render template
        var output = template({
            title: 'Log in'
        });

        res.status(200)
            .send(output)
    })

    // Login
    app.get('/admin/dashboard', function (req, res) {

        // Compile template
        var template = handlebars.compile(fs.readFileSync(path.join(__dirname, '../../../../views/pages/admin/dashboard.hbs'), 'utf8'));

        // Render template
        var output = template({
            title: 'Dashboard'
        });

        res.status(200)
            .send(output)
    })
}