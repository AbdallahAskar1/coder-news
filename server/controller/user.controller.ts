import { Handler, User } from "../types"
import {db} from "../datastore/index"
import {signInRequest, signInResponse, signUpRequest,signUpResponse} from "../api"
import crypto from "crypto";
export const signUpController:Handler<signUpRequest,signUpResponse> =async (req,res)=>{
    const {email,firstName,lastName,password,username} =req.body;
    
    if (!email || !firstName || !lastName || !password || !username){
        return res.sendStatus(400);
    }
    const userExist = await db.getUserByEmail(email)|| await db.getUserByUsername(username);
    if (userExist){
        return res.status(403).send("user already exists ")  
    }

    const user:User = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        username,
        email,
        password
    }
    await db.createUser(user)
    return res.sendStatus(201)

 }

 export const signInController :Handler<signInRequest,signInResponse>=async(req,res)=>{
    const {login,password} = req.body;
    if(!login || !password) {
        return res.sendStatus(403)
    }
    const userExist = await db.getUserByEmail(login) || await db.getUserByUsername(login);
    if (!userExist || password !=userExist.password){
        return res.sendStatus(403)
    }
    return res.status(200).send({
        email:userExist.email,
        firstName:userExist.firstName,
        lastName:userExist.lastName,
        id:userExist.id
    })
 }