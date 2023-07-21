import { Secret } from "jsonwebtoken";


export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: Secret;
    }
  }
}

