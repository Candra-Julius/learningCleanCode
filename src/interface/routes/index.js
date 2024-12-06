class Router {
    constructor(router, controller){
        this.router = router
        this.controller = controller
        Object.keys(this.controller).forEach(key => {
            if (typeof this.controller[key] === 'function') {
                this.controller[key] = this.controller[key].bind(this.controller)
            }
        })
        this.routing()
    }
    routing(){
        this.router.post('/users', this.controller.post)
        this.router.get('/users', this.controller.getUser)
        this.router.get('/users/:id', this.controller.getOneById)
        this.router.put('/users', this.controller.patch)
        this.router.delete('/users/:id', this.controller.delete)
        return this.router
    }
    getRouter() {
        return this.router
    }
}

module.exports = Router