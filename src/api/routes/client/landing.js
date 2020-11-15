const fs = require('fs')
const path = require('path')

module.exports = async (app, handlebars) => {

    // Demo
    app.get('/', function (req, res) {

        // Compile template
        var template = handlebars.compile(fs.readFileSync(path.join(__dirname, '../../../../views/pages/client/index.hbs'), 'utf8'));

        // Render template
        var output = template({
            title: 'GEEK AVAILABLE'
        });

        res.status(200)
            .send(output)
    })
}