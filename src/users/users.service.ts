/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: any[];

  constructor() {
    // const saltRounds = 10; 
    // const salt = bcrypt.genSaltSync(10);
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: bcrypt.hashSync('changeme', 10),
        bio: {
          name: 'John Doe',
          email: 'john@doe.com',
          address: '123 Main St',
          age: 19
        },
      },
      {
        userId: 2,
        username: 'chris',
        password: bcrypt.hashSync('secret', 10),
        bio: {
          name: 'Christoper Doe',
          email: 'chris@doe.com',
          address: '123 Main Street',
          age: 20
        },
      },
      {
        userId: 3,
        username: 'maria',
        password: bcrypt.hashSync('guess', 10),
        bio: {
          name: 'Mario Doe',
          email:'maria@doe.com',
          address: '123 Main Streets',
          age: 30
        },
      },
    ];
  }

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}