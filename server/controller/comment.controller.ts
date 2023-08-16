import {HandlerWithParams, Comment} from "../types"
import {CreateCommentRequest,CreateCommentResponse, DeleteCommentResponse, ListCommentRequest, ListCommentResponce} from "../api"
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

export const deleteCommentController:HandlerWithParams<{id:string},null,DeleteCommentResponse>= async(req,res)=>{
   const id = req.params.id
    if(!id){return res.status(400).send({'message':"id missing"})}

    await db.deleteComment(id)
    return res.status(200).send({'message':"comment deleted successfully"});


}
export const listCommentController:HandlerWithParams<{id:string},ListCommentRequest,ListCommentResponce> =async (req,res) => {
    const id = req.params.id
    if (!id){return res.status(400).send({'error':"id missing"})}
   
   const comments=await db.listComment(id)
    return res.send({
        'comments':comments
    })
}