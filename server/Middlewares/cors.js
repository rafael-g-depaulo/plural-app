//! setup middlewares
import cors from "cors"

const allowedOrigins = process.env.NODE_ENV === "production"
  ? [ /localhost$/, /localhost:3000$/ ]
  : [ /www\.festivalplural\.com\.br$/, /festivalplural\.com\.br$/, /dev\.festivalplural\.com\.br$/ ]

export default cors({
  origin: (origin, callback) => {
    // return callback(null, true) //shortcircuit the whole shebang
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    if (!allowedOrigins.some(regex => regex.test(origin))) {
      console.log(origin)
      const msg = "The CORS policy for this site does not allow access from the specified Origin."
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  credentials: true,
})
