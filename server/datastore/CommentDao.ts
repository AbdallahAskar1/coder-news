import { Comment } from "../types";

export interface CommentDao {
    createComment(comment:Comment):void;
    listComment(postId:string):Comment[]|undefined;
    deleteComment(id:string):void;
}