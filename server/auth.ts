import { jwtObject } from "./types";
import jwt from "jsonwebtoken"

export function signJwt(obj:jwtObject,):string{   
    const token =  jwt.sign(obj,"acv",{expiresIn:'24h'})
    return token;

}

export function verifyToken(token:string):jwtObject{
    return jwt.verify(token,"acv") as jwtObject;

}
