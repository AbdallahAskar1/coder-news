import { Datastore } from '..';
import { User, Post, Comment, Like } from '../../types';
import path from 'path';
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';

export class SqlDataStore implements Datastore {
    private db!: Database<sqlite3.Database, sqlite3.Statement>;
    public async openDb() {
        this.db = await open({
            filename: path.join(__dirname, 'codernews.sqlite'),
            driver: sqlite3.Database,
        });
        this.db.run('PRAGMA foreign_keys = ON');
        await this.db.migrate({
            migrationsPath: path.join(__dirname, 'migrations'),
        });
        return this;
    }

    async createUser(user: User): Promise<void> {
        await this.db.run(
            'INSERT INTO users (id,firstName,lastName,userName,email,password) VALUES (?,?,?,?,?,?)',
            user.id,
            user.firstName,
            user.lastName,
            user.username,
            user.email,
            user.password

        );
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
       return await this.db.get(`SELECT * FROM users WHERE email = ?`,email)
    }
    async getUserByUsername(username: string): Promise<User | undefined> {
        return await this.db.get(`SELECT * FROM users WHERE userName = ?`,username);

    }
    listPosts(): Promise<Post[]> {
        return this.db.all<Post[]>('SELECT * FROM posts');
    }
    async createPost(post: Post): Promise<void> {
        await this.db.run(
            'INSERT INTO posts (id,title,url,userID,postedAt) VALUES (?,?,?,?,?)',
            post.id,
            post.title,
            post.url,
            post.userId,
            post.postedAt,
        );
    }
    getPost(_id: string): Promise<Post | undefined> {
        throw new Error('Method not implemented.');
    }
    deletePost(_id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createComment(_comment: Comment): Promise<void> {
        throw new Error('Method not implemented.');
    }
    listComment(_postId: string): Promise<Comment[] | undefined> {
        throw new Error('Method not implemented.');
    }
    deleteComment(_id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createLike(_like: Like): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
