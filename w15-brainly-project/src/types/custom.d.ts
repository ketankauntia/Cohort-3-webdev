import * as express from "express";

declare module "express" {
  export interface Request {
    user?: { id: string };
  }
}
