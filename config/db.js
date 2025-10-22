const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log(`Database connection successful`);
    }catch(error){
        console.log(`Database connection failed: ${error}`);
    }
}

module.exports = connect;