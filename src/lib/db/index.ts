import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { users } from './schema'
 console.log("DDD1"+process.env.DATABASE_URL);

 
 
const connectionString = process.env.DATABASE_URL as string;
const client = postgres(connectionString)
console.log("DD2"+connectionString);
export const db = drizzle(client);