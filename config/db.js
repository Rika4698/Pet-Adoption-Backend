const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();


const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB(){
    try{
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("Mongodb connected");
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

function getDB(){
    if(!db)
        throw new Error ("Database not connected");
    return db;

}

module.exports = {connectDB, getDB};