const express =  require('express');
const dotenv =  require('dotenv');
dotenv.config({path: './config/.env'});
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const errorHandler = require("./middlewares/error")
const connect = require("./config/db")

const authRoute = require("./routes/auth");

// CORS, helmet, morgan, rate limiter, mongo sanitize, xss-clean, hpp, compression, cookie parser

const app = express()


app.use(express.json())

app.use(hpp())
app.use(helmet())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

app.use(limiter)

app.use(cors())

//connection to the database
connect()


app.use("/auth", authRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server connected"
    })
})

app.use(errorHandler);

const PORT = process.env.PORT || 5005
const HOST = process.env.HOST || '127.0.0.1'

app.listen(5050, HOST, error => {
    if(error){
        console.log('App error: ', error)
    }
    console.log('Server is running on port 5050')
})
