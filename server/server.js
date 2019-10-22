import express from 'express'
import graphqlHTTP from 'express-graphql'
import {makeExecutableSchema} from 'graphql-tools'

import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import models from './db/models'

import {getUserIdMiddleware} from './services/user'

const schema = makeExecutableSchema({
  	typeDefs,
  	resolvers,  
})

const app = express()
app.use(getUserIdMiddleware)
app.use('/graphql', graphqlHTTP( req => ({
	schema,
	context: {
		models,
		userId: req.userId
	},
  	graphiql: true,
})))
app.listen(5000, () => console.log('Now browse to localhost:5000/graphql'))



// const express = require('express')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// const dotenv = require('dotenv')

// const db = require('./config/database')

// // import routes files
// const loginRouter = require('./routes/auth/login')
// const signupRouter = require('./routes/auth/signup')
// const verifyRouter = require('./routes/auth/verify')
// const forgotPasswordRouter = require('./routes/auth/forgotPassword')
// const resetPasswordRouter = require('./routes/auth/resetPassword')
// const loggedUserRouter = require('./routes/user/loggedUser')
// const BookingRouter = require('./routes/user/bookings')

// dotenv.config()

// // connect with postgres database
// db.authenticate()
// .then(() => console.log('success connected....'))
// .catch(err => console.log(`Err ${err}`))

// const app = express()

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
// app.use(cookieParser())

// // using routes
// app.use(loginRouter)
// app.use(signupRouter)
// app.use(verifyRouter)
// app.use(forgotPasswordRouter)
// app.use(resetPasswordRouter)
// app.use(loggedUserRouter)
// app.use(BookingRouter)

// const port = process.env.PORT || 5000

// app.listen(port, () => console.log(`Server up and running on port ${port} !`))