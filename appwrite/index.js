import { Client as Appwrite, Databases, Account, Avatars } from "appwrite";
import { Server } from "../utils/config";

const client = new Appwrite();
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client, Server.database);

client.setEndpoint(Server.endpoint).setProject(Server.project);

const sdk = { account, database, avatars };
export { sdk };
