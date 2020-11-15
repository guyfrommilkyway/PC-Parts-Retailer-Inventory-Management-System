module.exports = async (app, handlebars) => {
    await require('./routes/client/landing')(app, handlebars)
    await require('./routes/admin/landing')(app, handlebars)
}