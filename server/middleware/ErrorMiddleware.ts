import { ErrorRequestHandler } from "express";

 
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error('error:', err);
    return res.status(500).send('an unexpected error occurred please try again');
  };
  