const mongoose = require('mongoose');

// connect to database
async function connect() {
    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Connected to database");
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

module.exports = {
    connect,
}

