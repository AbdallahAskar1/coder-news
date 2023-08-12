import {HandlerWithParams, Comment} from "../types"
import {CreateCommentRequest,CreateCommentResponse} from "../api"
import {db} from "../datastore/dao"
import crypto from "crypto"
export const createCommentController:HandlerWithParams<{postId:string},CreateCommentRequest,CreateCommentResponse>=async (req,res)=>{
    console.log(req.params)
    if(!req.params.postId){
        return res.status(400).send({"error":'post id not found'})
    }
    if(!req.body.comment){
        return res.status(400).send({"error":'comment missing'})
    }

    const comment: Comment = {
        id: crypto.randomUUID(),
        comment: req.body.comment,
        parent:req.body.parent || 0,
        postedAt: Date.now(),
        postId: req.params.postId,
        userId: res.locals.userId,
      };
      await db.createComment(comment);
      return res.status(201).send({'message':"comment created successfully"});
    
}