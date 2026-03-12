let { MongoClient } = require("mongodb");
require("dotenv").config();
let url = process.env.URL;

let connectDb = async () => {
    try{
        let client = await MongoClient.connect(url);
        let db = client.db("petcare");
        if (db){
            return db
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = { connectDb }