const jsonServer = require('json-server')

const tdServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()

const PORT = 3000 || process.env.PORT
tdServer.use(middleware)
tdServer.use(router)

tdServer.listen(PORT, () => {
    console.log(`Server App is running at port ${PORT}`);

})