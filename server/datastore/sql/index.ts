import{Datastore} from ".."
import { User, Post, Comment, Like } from "../../types";
import path from 'path';
import {open} from "sqlite"
import sqlite3 from 'sqlite3';

export class SqlDataStore implements Datastore {

    public async openDb() {
        const db = await open({
            filename:path.join(__dirname,'codernews.sqlite'),
            driver:sqlite3.Database
        })
        await db.migrate({
            migrationsPath:path.join(__dirname,"migrations")
        })
        return this
        
    }
    createUser(_user: User): Promise<void> {
        throw new Error("Method not implemented.");
       
    }
    getUserByEmail(_email: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(_username: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    listPosts(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    async createPost(_post: Post): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getPost(_id: string): Promise<Post | undefined> {
        throw new Error("Method not implemented.");
    }
    deletePost(_id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createComment(_comment: Comment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listComment(_postId: string): Promise<Comment[] | undefined> {
        throw new Error("Method not implemented.");
    }
    deleteComment(_id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createLike(_like: Like): Promise<void> {
        throw new Error("Method not implemented.");
    }

}