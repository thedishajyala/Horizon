import { Client, Databases } from "node-appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6980425700182d437ae5")
    .setKey("standard_62b49b4e3040db2d2c6e8769dc006e2aae902acea41aa2c05deed88eb77aad37a75c4d785259254416ae2811093cabcb2e047f4bcf7edaa2a5a962b28f95c8ed3723d964fe9feabb5093f4ca35a886136fc84cc8ccff8ce376c76753e3f14b89cb53167cc3a79d5321013530783ef8dee463c23e339d1a2aed32cc0fff1035f3");

const databases = new Databases(client);

const DATABASE_ID = "6980438c00177223da23";
const USER_COLLECTION_ID = "users";

async function createIndex() {
    try {
        console.log("Creating index for userId...");
        await databases.createIndex(
            DATABASE_ID,
            USER_COLLECTION_ID,
            "userId",
            "key",
            ["userId"],
            ["ASC"]
        );
        console.log("Index 'userId' created successfully!");
    } catch (error) {
        if (error.code === 409) {
            console.log("Index already exists.");
        } else {
            console.error("Error creating index:", error);
        }
    }
}

createIndex();
