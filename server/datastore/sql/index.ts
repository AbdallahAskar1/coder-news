import { Datastore } from '../dao/index';
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
    async getUserById(id: string): Promise<User | undefined> {
        return await this.db.get(`SELECT * FROM users WHERE id = ?`,id);

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
    async createComment(comment: Comment): Promise<void> {
       await this.db.run('INSERT INTO comments (id,postId,userId,comment,parent,postedAt) VALUES (?, ?, ?, ?, ?, ?)',
        comment.id,
        comment.postId,
        comment.userId,
        comment.comment,
        comment.parent,
        comment.postedAt
   )
    }
    async listComment(postId: string): Promise<Comment[] | undefined> {
       return await this.db.all('SELECT * FROM comments WHERE postId = ? ',postId);
    }
    async deleteComment(id: string): Promise<void> {
         this.db.run('DELETE FROM comments WHERE id = ?',id)
    }
    createLike(_like: Like): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
