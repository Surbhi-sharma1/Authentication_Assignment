import {Entity, hasMany, model, property} from '@loopback/repository';
import {User} from './users.model';

@model({
  name: 'customer'
})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true
  })
  customerid?: number;

  @property({
    type: 'string',
    required: true,

  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @hasMany(() => User, {keyTo: 'customerid'})
  users: User[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}


