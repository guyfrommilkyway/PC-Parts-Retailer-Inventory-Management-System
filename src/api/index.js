module.exports = async (app, handlebars) => {
    await require('./routes/landing')(app, handlebars)
}