import {Handler} from "../types"
import { verifyToken } from "../auth";
import { db } from "../datastore";
export const authMiddleware :Handler<any,any> = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    const token =authHeader?.replace('Bearer ','')
    console.log(authHeader)
    console.log("token:",token)
    if (!token){
       return res.sendStatus(401);
    }
    
    try{
        const payload = verifyToken(token)
        const user = await db.getUserById(payload.userId);
        if (!user) {
            throw "not found"
        }
        res.locals.userId = user.id
        return next();
    }catch {
        return res.status(401).send({error:"invalid token "})
    }
}
