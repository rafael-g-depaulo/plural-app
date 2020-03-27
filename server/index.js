// import express (after npm install express)
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

// use .env config file
dotenv.config()

// create new express app and save it as "app"
const app = express()

//! setup middlewares
import cors from 'cors'

const allowedOrigins = [
    "localhost",
  ]
  .flatMap(origin => [origin, `${origin}:${process.env.PORT}`])
  .flatMap(origin => [`http://${origin}`, `https://${origin}`])

app.use(cors({
  origin: (origin, callback) => {
    // return callback(null, true) //shortcircuit the whole shebang
    http://191.232.161.59
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true)
    if(allowedOrigins.indexOf(origin) === -1){
      console.log(origin)
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  }
}))

// To parse cookies from the HTTP Request
import cookieParser from 'cookie-parser'
app.use(cookieParser())

// body parser to parse http requests' bodies
import bodyParser from 'body-parser'
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

//! server configuration
const {
  PORT = "8000",
  NODE_ENV = "development",
} = process.env

//! setup routes
import Router from './Routes'

app.use('/api', Router({}))

// create a route for the app
app.get('/api', (req, res) => {
  res.json({
    message: "this is my starter project for a Node.js API with a postgres server connection",
    PS: "please remember to set up env vars in ./.env (example is in ./env.example",
  })
})

// if in production, redirect any requests that dont have an API path, map to react bundle
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    console.log("going to the app, not the API")
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`)
})