const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// g6343811
// TQM87i8KlFSkRdDz







// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://hello:roXn8MUT4kjS8ugO@ac-b272qal-shard-00-00.l5pzs3z.mongodb.net:27017,ac-b272qal-shard-00-01.l5pzs3z.mongodb.net:27017,ac-b272qal-shard-00-02.l5pzs3z.mongodb.net:27017/?ssl=true&replicaSet=atlas-8pihtq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
MongoClient.connect(uri, function (err, client) {
    const collection = client.db("test").collection("devices");
    const samplecollection = client.db("test").collection("sample");
    console.log(uri);
    
});


app.get('/', (req,res)=>{
    res.send('simple crud is runninggggg');

})



app.listen(port, ()=>{
    console.log(`simple crud is running port , ${port}`)
})