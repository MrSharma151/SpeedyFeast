const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://SpeedyFeast:FGMW4Vh4fxkpU9RD@cluster0.ggcf7qo.mongodb.net/SpeedyFeast?retryWrites=true&w=majority&appName=Cluster0'

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
            
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
           
        }
    })
};
