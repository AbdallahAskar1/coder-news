import {UserDao} from './UserDao'
import {PostDao} from './PostDao'
import { LikeDao } from './LikeDao';
import { CommentDao } from "./CommentDao";
// import { InMemoryDatastore } from './memorydb';
import {SqlDataStore} from "../sql/index"
export interface Datastore extends UserDao,PostDao,CommentDao,LikeDao {}

export let db:Datastore;
export async function initDb() {
//  db=new InMemoryDatastore()   
    db = await new SqlDataStore().openDb()
}
