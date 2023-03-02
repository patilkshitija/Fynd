const { MongoClient } = require('mongodb');

// Connection URI for the MongoDB database
const url = 'mongodb://localhost:27017';

// Name of the collection to retrieve data from
async function findOne() {
  let client;
  try {
    // Connect to the MongoDB database
    client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    // Select the collection
    const collection = client.db("socialApp").collection("users");

    // Fetch all documents from the collection
    const docs = await collection.find().toArray();

    // Print the retrieved documents
    console.log(docs);

  } catch (err) {
    console.error(err);

  } finally {
    // Close the database connection
      client.close();
    
  }
}

// Call the function to connect and fetch data
findOne();

