import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema'
 
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'
const client = postgres(connectionString)
export const db = drizzle(client, { schema: { users } });
 
export const allUsers = await db.select().from(users);