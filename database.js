const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://jangidkumarjay2004_db_user:jaykumar2004@nodejs.b5v8aea.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("DataBase connected successfully");
  const db = client.db(dbName);
  const collection = db.collection("user");

  //insert
  const data = {
    firstName: "Chintu",
    lastName: "Kumar",
    city: "mountAbu",
    phoneNumber: "656565656",
  };
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  //read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
