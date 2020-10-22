let MongoClient = require('mongodb').MongoClient;

class MongoD {
    constructor(){
        this.client;
        this.uri = "mongodb://localhost:27017/mycollection";
        this.collection = "test";
    };
   connectClient = async () => {
        this.client = new MongoClient(this.uri);
    }

    createCollection = async() =>{
        try{
            await this.client.connect();
            const database = this.client.db(this.db);
            database.createCollection(this.collection);
        }catch(e){
            console.log(e);
        }
    }

    //This is the only one working good, change in the other functions
    getObjectsFromCollection = async ()=> {
        try {
            // Connect the client to the server
            await this.client.connect();
            
            const database = this.client.db(this.db);
            const results = database.collection(this.collection).find();

            results.each(function(err, doc) {
                console.log(doc);
            });

          }catch(e){
              console.log(e);
          }
    }

    insertToCollection = async (collection,obj) => {
       let  myobj = { name: "Company Inc", address: "Highway 37" };
        try {
            // Connect the client to the server
            await this.client.connect();
            const database = this.client.db(this.db);
            database.collection(collection).insertOne(myobj);
          }catch(e){
              console.log(e);
          } finally {
            // Ensures that the client will close when you finish/error
            await this.client.close();
          }
    }

    updateCollection = async (collection,obj,nobj) => { 
        try {
            // Connect the client to the server
            await this.client.connect();
            const database = this.client.db(this.db);
            database.collection(collection).updateOne(obj, {
                $set: nobj
            });

          }catch(e){
              console.log(e);
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }

    deleteFromCollection = async (collection,obj) => {
        try {
            // Connect the client to the server
            await this.client.connect();
            const database = this.client.db(this.db);
            database.collection(collection).deleteOne(
                obj
            );

          }catch(e){
              console.log(e);
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }

}


async function initialize(){
let mongoD = new MongoD(process.env.MONGOURI,process.env.DB,process.env.COLLECTION);

await mongoD.connectClient();
await mongoD.createCollection();
await mongoD.insertToCollection("test");
await mongoD.getObjectsFromCollection();
}

if (!module.parent) {
    initialize();
}

module.exports = {
    initialize,
};