import { Datastore } from '..';
import { User, Post, Comment, Like } from '../../types';

export class InMemoryDatastore implements Datastore {
    getUserById(_id: string): Promise<User | undefined> {
        throw new Error('Method not implemented.');
    }
    private user: User[] = [];
    private posts: Post[] = [];
    private likes: Like[] = [];
    private comments: Comment[] = [];

    createUser(user: User): Promise<void> {
        return new Promise(resolve => {
            this.user.push(user);
            resolve();
        });
    }

    getUserByEmail(email: string): Promise<User | undefined> {
        return new Promise(resolve => {
            const foundUser = this.user.find(u => u.email === email);
            resolve(foundUser);
        });
    }

    getUserByUsername(username: string): Promise<User | undefined> {
        return new Promise(resolve => {
            const foundUser = this.user.find(u => u.username === username);
            resolve(foundUser);
        });
    }

    listPosts(): Promise<Post[]> {
        return new Promise(resolve => {
            resolve(this.posts);
        });
    }

    createPost(post: Post): Promise<void> {
        return new Promise(resolve => {
            this.posts.push(post);
            resolve();
        });
    }

    getPost(id: string): Promise<Post | undefined> {
        return new Promise(resolve => {
            const foundPost = this.posts.find(p => p.id === id);
            resolve(foundPost);
        });
    }

    deletePost(id: string): Promise<void> {
        return new Promise(resolve => {
            const index = this.posts.findIndex(p => p.id === id);
            if (index === -1) {
                resolve();
            } else {
                this.posts.splice(index, 1);
                resolve();
            }
        });
    }

    createComment(comment: Comment): Promise<void> {
        return new Promise(resolve => {
            this.comments.push(comment);
            resolve();
        });
    }

    listComment(postId: string): Promise<Comment[] | undefined> {
        return new Promise(resolve => {
            const postComments = this.comments.filter(c => c.postId === postId);
            resolve(postComments);
        });
    }

    deleteComment(id: string): Promise<void> {
        return new Promise(resolve => {
            const index = this.comments.findIndex(c => c.id === id);
            if (index === -1) {
                resolve();
            } else {
                this.comments.splice(index, 1);
                resolve();
            }
        });
    }

    createLike(like: Like): Promise<void> {
        return new Promise(resolve => {
            this.likes.push(like);
            resolve();
        });
    }
}

