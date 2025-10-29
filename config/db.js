const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log(`Database connection successful`);
    }catch(error){
        console.log(`Database connection failed: ${error}`);
    }
}

module.exports = connect;