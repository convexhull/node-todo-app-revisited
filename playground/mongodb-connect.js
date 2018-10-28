const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    // db.collection('Todos').insertOne({
    //     text : 'something to do',
    //     completed : false
    // } , (err , result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo ',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'yash',
    //     age : 21,
    //     location: 'katra'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert the value ',err);
    //     } 
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});