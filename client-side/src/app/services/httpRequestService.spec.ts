import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";
import { url } from "./userModel";
import { TestBed } from "@angular/core/testing";
import { HTTPServiceRequest } from "./httpRequestService";
import { mockRoles } from "./mocks/mockroles";
import { URL, User, Customer } from "./userModel";
import { mockUser, updatedUser, UserAfterDelete } from "./mocks/mockuser";
describe('HTTPServiceRequest', () => {
    let userhttpservice: HTTPServiceRequest;
    let httptestcontroller: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [HttpClientTestingModule],
            providers: [HTTPServiceRequest]

        })
        userhttpservice = TestBed.inject(HTTPServiceRequest);
        httptestcontroller = TestBed.inject(HttpTestingController);
    });

    it('should retrieve rolelist ', () => {
        userhttpservice.getRoleList().subscribe(response =>
            expect(response).toEqual(mockRoles))

        const req = httptestcontroller.expectOne({
            method: 'GET',
            url: `${url}roles`,
        })

        req.flush(mockRoles);
    })
    it('should retreive all the users', () => {
        userhttpservice.getUsers().subscribe(response => {
            expect(response).toEqual(mockUser);
        })
        const req = httptestcontroller.expectOne({
            method: 'GET',
            url: `${url}users`,
        })

        req.flush(mockUser);
    })
    it('should delete the user by id', () => {
        let id: number = 3
        userhttpservice.onDelete(id).subscribe(response => {
            expect(response).toEqual(UserAfterDelete);
        })
        const req = httptestcontroller.expectOne({
            method: 'DELETE',
            url: `${url}users/${id}`,
        })

        req.flush(UserAfterDelete);
    })
    it('should update the user by id', () => {
        let id: number = 3;
        let body = {
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

        };
        userhttpservice.updateUser(body).subscribe(response => {
            expect(response).toEqual(updatedUser);
        })
        const req = httptestcontroller.expectOne({
            method: 'Put',
            url: `${url}users/${id}`,
        })

        req.flush(updatedUser);
    })

})

