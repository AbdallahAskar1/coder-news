import { Handler, User } from "../types"
import {db} from "../datastore/dao"
import {signInRequest, signInResponse, signUpRequest,signUpResponse} from "../api"
import crypto from "crypto";
import { signJwt } from "../auth";
export const signUpController:Handler<signUpRequest,signUpResponse> =async (req,res)=>{
    const {email,firstName,lastName,password,username} =req.body;
    
    if (!email || !firstName || !lastName || !password || !username){
        return res.sendStatus(400).send({error:'all fields are required'});
    }
    const userExist = await db.getUserByEmail(email)|| await db.getUserByUsername(username);
    if (userExist){
        return res.status(403).send({error:"user already exists "})  
    }
    const passHash = crypto.pbkdf2Sync(password,process.env.PASS_SALT!,24,64,"sha512").toString('hex')
    const user:User = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        username,
        email,
        password:passHash
    }
    await db.createUser(user)
    const jwt = signJwt({userId:user.id})
    return res.status(201).send({jwt})

 }

 export const signInController :Handler<signInRequest,signInResponse>=async(req,res)=>{
    const {login,password} = req.body;
    console.log(req.body)
    if(!login || !password) {

        return res.sendStatus(403)
    }
    const userExist = await db.getUserByEmail(login) || await db.getUserByUsername(login);
    const passHash = crypto.pbkdf2Sync(password,process.env.PASS_SALT!,24,64,"sha512").toString('hex')
    if (!userExist || passHash !=userExist.password){
       
        
        return res.sendStatus(403)
    }

    const token = signJwt({userId:userExist.id})
    return res.status(200).send({
        user:{firstName:userExist.firstName,lastName:userExist.lastName,email:userExist.email,id:userExist.id,username:userExist.username},
        jwt:token
    })
 }
