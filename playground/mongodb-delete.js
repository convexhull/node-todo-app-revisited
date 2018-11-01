const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    // db.collection('Todos').deleteMany({ text : 'eat lunch'}).then( (result)=> {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed : false}).then( (result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany( { name : 'yash'} ).then( (results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndDelete( { _id : new ObjectID('5bdac9c1fa7f092715dce88e')}).then( (result) => {
        console.log(result);
    });



    //db.close();
}); 