import { User, Customer } from "../userModel";
export const mockUser: User[] = [
    {
        "customerid": 1,
        "id": 3,
        "firstname": "Neil",
        "middlename": "-",
        "lastname": "Irani",
        "email": "neil.irani@gmail.com",
        "phone": "408-10000",
        "roleName": "superadmin",
        "address": "Australia",
        "customerName": "Ashish"
    },
    {
        "customerid": 2,
        "id": 4,
        "firstname": "Tom",
        "middlename": "-",
        "lastname": "Hanks",
        "email": "tom.hanks123@gmail.com",
        "phone": "408-11100",
        "address": "USA",
        "roleName": "admin",
        "customerName": "Ashish"
    }
]
export const updatedUser: User[] = [
    {
        "customerid": 1,
        "id": 3,
        "firstname": "Neil",
        "middlename": "-",
        "lastname": "Irani",
        "email": "neil.irani@gmail.com",
        "phone": "408-10000",
        "roleName": "superadmin",
        "address": "Australia",
        "customerName": "Ashish"
    },
    {
        "customerid": 2,
        "id": 4,
        "firstname": "Tom",
        "middlename": "-",
        "lastname": "Hanks",
        "email": "tom.hanks123@gmail.com",
        "phone": "408-11100",
        "address": "USA",
        "roleName": "admin",
        "customerName": "Ashish"
    },
    {
        "customerid": 7,
        "id": 3,
        "firstname": "Surbhi",
        "middlename": "-",
        "lastname": "Sharma",
        "email": "surbhi123@gmail.com",
        "phone": "98219011",
        "address": "India",
        "roleName": "subscriber",
        "customerName": "Ashish"

    }
]
export const UserAfterDelete: User[] = [
    {
        "customerid": 1,
        "id": 3,
        "firstname": "Neil",
        "middlename": "-",
        "lastname": "Irani",
        "email": "neil.irani@gmail.com",
        "phone": "408-10000",
        "roleName": "superadmin",
        "address": "Australia",
        "customerName": "Ashish"
    }
]