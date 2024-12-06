const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helmet = require('helmet')

//infrastructure/database/sequelize
const Database = require('./src/infrastructure/database/sequelize')

//utilities
const Utilities = require('./src/utilities/utilities')
    
//infrastructure/database/utils/transaction
const Transaction = require('./src/infrastructure/database/utils/transaction')

//infrastructure/database/usersModels/user
const UsersModels = require('./src/infrastructure/database/models/userModels')

//infrastructure/repository/userRepository
const UserRepository = require('./src/infrastructure/repository/userRepository')

//infrastructure/depedencies/hashPassword
const HashPassword = require('./src/infrastructure/depedencies/hashPassword')

//useCase/userUseCase
const UserUseCase = require('./src/usecase/userUsecase')

//interface/userInterface
const UserController = require('./src/interface/controller/userController')

//interface/router
const Router = require('./src/interface/routes/index');

const Auth = require('./src/interface/middlewere/auth');

/////////////////////////////////////////////////////////////////////////////////
app.use(helmet)
app.use(express.json())
/////////////////////////////////////////////////////////////////////////////////
const utilities = new Utilities()
const hashPassword = new HashPassword(bcrypt)
const database =  new Database(Sequelize)
const transaction = new Transaction(database)
const usersModels = new UsersModels(database)
const userRepository = new UserRepository(usersModels)
const userUseCase = new UserUseCase(userRepository, transaction, utilities, hashPassword)
const userController = new UserController(userUseCase, utilities)

const auth = new Auth(jwt, userRepository)

const route = new Router(express.Router(), userController);

app.use('/', auth.doAuth, route)
app.use((req, res, next) => {
    res.status(404).send({ error: 'Not Found' })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})