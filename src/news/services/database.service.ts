import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: {news?: mongoDB.Collection} = {};

export async function connectToDatabase() {
    dotenv.config();
    // non null operator https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);
    await client.connect();

    const db = client.db(process.env.DB_NAME);

    const newsCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME!);

    collections.news = newsCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsCollection.collectionName}`);

}