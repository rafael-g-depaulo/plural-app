//! setup middlewares
import cors from 'cors'

const allowedOrigins = [
  "localhost",
]
.flatMap(origin => [origin, `${origin}:${process.env.PORT}`])
.flatMap(origin => [`http://${origin}`, `https://${origin}`])

export default cors({
  origin: (origin, callback) => {
    // return callback(null, true) //shortcircuit the whole shebang
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
})