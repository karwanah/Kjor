export function Mongo(mongodb){ 
  
  const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://karwan:P3Dforlife@cluster0.ihl43.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
}
