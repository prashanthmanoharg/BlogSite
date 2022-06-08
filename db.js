const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/blogdb');

async function start(){
 await client.connect()
 module.exports = client.db()
 const app = require('./app')
 app.listen(3003)
}

start()