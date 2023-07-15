import { Datastore } from "..";
import { User, Post, Comment, Like } from "../../types";

export class InMemoryDatastore implements Datastore{

    private user:User[]=[];
    private posts:Post[]=[];
    private likes:Like[]=[];
    private comments:Comment[]=[];

    createUser(user: User): void {
        this.user.push(user )
    }
    getUserByEmail(email: string): User | undefined {
        return this.user.find((u)=>u.email === email)
    }
    getUserByUsername(username: string): User | undefined {
        return this.user.find((u)=>u.username === username)
        
    }
    listPosts(): Post[] {
        return this.posts
    }
    createPost(post: Post): void {
        this.posts.push(post)
    }
    getPost(id: string): Post | undefined {
        return this.posts.find((p)=>p.id===id)
    }
    deletePost(id: string): void {
       const index = this.posts.findIndex((p)=>p.id===id)
       if(index === -1){
        return
       }
       this.posts.splice(index,1)

    }
    createComment(comment: Comment): void {
        this.comments.push(comment)
    }
    listComment(postId: string): Comment[] | undefined {
        return this.comments.filter((c)=>c.postId===postId)
    }
    deleteComment(id: string): void {
        const index = this.comments.findIndex((c)=>c.id===id)
       if(index === -1){
        return
       }
       this.comments.splice(index,1)
    }
    createLike(like: Like): void {
       this.likes.push(like)
    }

}