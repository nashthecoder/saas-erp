function addRoutes(app) {
    app.all('*', (req, res, next) => {
        console.log(req.method + ' ' + req.url);
        next();
    });

    //GET METHOD
    app.get('/test-url', (req, res, next) => {
        res.send({
            success: true,
        });
    });


    //app.post

}

const routes = {
    addRoutes
};

module.exports = routes;