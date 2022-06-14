import Role from './enum';
export class role {
    name!: string
    key!: string
    description!: string
}
export class User {
    customerid!: number
    id!: number
    firstname!: string
    middlename?: string
    lastname!: string
    email!: string
    phone!: string
    roleName!: string
    customerName!: string
    address!: string

}
export class Customer {
    customerid!: number
    name!: string
    website!: string
    address!: string
}
export const URL = 'http://localhost:3000/customers';
export const url = 'http://localhost:3000/';