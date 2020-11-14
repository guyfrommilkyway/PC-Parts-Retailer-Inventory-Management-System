const fs = require('fs')
const path = require('path')

module.exports = async (app, handlebars) => {

    // Demo
    app.get('/demo', function (req, res) {

        // Compile template
        var template = handlebars.compile(fs.readFileSync(path.join(__dirname, '../../../views/pages/demo.handlebars'), 'utf8'));

        // Render template
        var output = template({
            title: 'Layout Test',
            items: [
                'apple',
                'orange',
                'banana'
            ]
        });

        res.status(200)
            .send(output)
    })

}