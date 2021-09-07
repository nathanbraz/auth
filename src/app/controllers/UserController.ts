import { Request, Response } from "express";
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController{

  async show(req: Request, res: Response){
    const repo = getRepository(User);
    
    const users = await repo.find();
    const idLogado = req.userId;
    return res.json({users, idLogado});
  }

  async store(req: Request, res: Response){
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email }});

    if(userExists){
      return res.sendStatus(409).json("Usuário já existe!");
    }

    const user = repository.create({ email, password});

    await repository.save(user);

    return res.json(user);


  }
}

export default new UserController();