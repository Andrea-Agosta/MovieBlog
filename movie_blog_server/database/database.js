const { MongoClient } = require('mongodb');

const url = 'mongodb://saltadmin:episalt@localhost:27017';
const dbName = 'movieBlog';

const connect = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection('movieBlogComments');
  db.on('close', () => {
    console.log('connection closed');
  });
  db.on('reconnect', () => {
    console.log('reconnected');
  });
  return { collection, client };
};

const testDb = async () => {
  const { collection, client } = await connect();
  const newComment = {
    name: 'test',
    Comment: 'test'
  };
  collection.insertOne(newComment);
  setTimeout(() => client.close(), 1000);
}

module.exports = { testDb };