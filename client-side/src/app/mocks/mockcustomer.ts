import { Customer, User } from "../userModel";
export const mockCustomersList: Customer[] = [
    {
        "customerid": 2,
        "name": "Harry",
        "website": "website2",
        "address": "New York"

    },
    {
        "customerid": 7,
        "name": "Ram",
        "website": "website3",
        "address": "India"

    }
]
export const customerAfterDelete: Customer[] = [
    {
        "customerid": 7,
        "name": "Ram",
        "website": "website3",
        "address": "India"

    }
]
export const addCustomer: Customer[] = [
    {
        "customerid": 3,
        "name": "Ram",
        "website": "website3",
        "address": "India"
    }
]
export const mockUsers: User[] = [{
    "customerid": 2,
    "id": 1,
    "firstname": "Udayan",
    "middlename": "",
    "lastname": "Sharma",
    "email": "udayan@gmail.com",
    "phone": "98765499999",
    "roleName": "admin",
    "customerName": "Ashish",
    "address": "USA"
}]