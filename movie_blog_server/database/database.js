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

const saveComments = async (newComment) => {
  const { collection, client } = await connect();
  collection.insertOne(newComment);
  setTimeout(() => client.close(), 1000);
}

const getComments = async (id) => {
  const { collection, client } = await connect();
  const result = await collection.find({ "id": +id }).toArray();
  setTimeout(() => client.close(), 1000);
  return result;
}

const deleteComments = async (data) => {
  const { collection, client } = await connect();
  collection.deleteOne({ "id": +data.id, name: data.name, description: data.description });
  setTimeout(() => client.close(), 1000);
  return true;
}


module.exports = { saveComments, getComments, deleteComments };