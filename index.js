const express = require('express')
const config = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./api/api')
const { connect } = require('./db/db')


// express app setup
async function app() {
    const app = express();


    // using cors middleware
    app.use(cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    }));

    // using body parser middleware
    app.use(bodyParser.json());


    // load environment variables
    config.config();
    await connect();
    app.get("/", (req, res) => {
        return res.status(200).json({ "message": "online" });
    })

    app.use("/api", router);
    app.listen(process.env.PORT, () => {
        console.log(`Server started at ${process.env.PORT}`);
    }
    )
}

app();
