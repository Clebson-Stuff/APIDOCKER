import UserController from './controller';
import {Request, Response} from 'express';

export default class UserRoutes {
  public UserCtlr;
  constructor(){
    this.UserCtlr = new UserController();
  }

  index(req:Request, res:Response) {
    return this.UserCtlr.getAll(req, res);
  }

  create(req:Request, res:Response) {
    return this.UserCtlr.createUser(req, res);
  }

  findOne(req:Request, res:Response) {
    return this.UserCtlr.getById(req, res);
  }

  update(req:Request, res:Response) {
    return this.UserCtlr.updateUser(req, res);
  }

  destroy(req:Request, res:Response){
    return this.UserCtlr.deleteUser(req, res);
  }
}
