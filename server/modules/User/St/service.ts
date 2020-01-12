import {IUser, createUser, createUsers, createUserById, createUserByEmail, IUserDetail} from '../interface';
import User from '../service';
var models  = require('../../models');
import * as Bluebird from 'bluebird';

export default class Student implements IUser,User {

  public id: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(){}

  create(user: any) {
    return models.User.create(user);
  }

  getAll(): Bluebird<IUser[]> {
    return models.User.findAll({
      order: ['name']
    })
    .then(createUsers);
  }

  getById(id:number): Bluebird<IUserDetail> {
    return models.User.findOne({
      where: {id}
    })
    .then(createUserById);
  }

  getByEmail(email:string): Bluebird<IUserDetail> {
    return models.User.findOne({
      where: {email}
    })
    .then(createUserByEmail)
  }

  update(id: number, user: any) {
    return models.User.update(user, {
      where: {id},
      fields: ['name', 'email', 'password'],
      hooks: true,
      individualHooks: true
    });
  }

  delete(id: number) {
    return models.User.destroy({
      where: {id}
    });
  }
}
