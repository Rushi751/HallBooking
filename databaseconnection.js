import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"
import process from "node:process"
dotenv.config()
async function createConnection(){
    const url = process.env.url
    
try {
    const client=new MongoClient(url)
    await client.connect()  
    console.log("mongo connected")
    return client
} catch (error) {
    console.log(error)
}
}
export const client= await createConnection()