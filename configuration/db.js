const {MongoClient}=require('mongodb');
const _uri='mongodb+srv://anaelle:1234@test.m5gly.mongodb.net/sample_mflix?retryWrites=true&w=majority'
const dbCon=(coll,cb) =>{
MongoClient.connect(_uri,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
} )
.then(async(client)=> {
    const db=client.db('sample_mflix').collection(coll);
    await cb(db);
    client.close();
})

};

module.exports=dbCon;