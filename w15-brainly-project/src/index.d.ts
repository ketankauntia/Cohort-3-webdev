// import * as express from "express";

// declare module "express" {
//   export interface Request {
//     user?: { id: string };
//   }
// }

import "express";

declare global {
  namespace Express  {
    export interface Request {
      user?: {id:string};
      // userId?: string;
    }
  }
}