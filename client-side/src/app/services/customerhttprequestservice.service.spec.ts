import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { CustomerhttprequestService } from './customerhttprequestservice.service'
import { customerAfterDelete, mockCustomersList, mockUsers } from "./mocks/mockcustomer";
import { Customer } from "./userModel";
import { URL } from './userModel'
describe('CustomerhttprequestserviceService', () => {
  let customerService: CustomerhttprequestService;
  let httptestcontroller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [CustomerhttprequestService]
    });
    customerService = TestBed.inject(CustomerhttprequestService);
    httptestcontroller = TestBed.inject(HttpTestingController);

  });

  it('should be retrieve customer details', () => {
    customerService.getCustomerDetails().subscribe(response => expect(response).toEqual(mockCustomersList))
    const req = httptestcontroller.expectOne({
      method: 'GET',
      url: `${URL}`,
    });

    req.flush(mockCustomersList);
  })
  it('delete api should delete customer by id', () => {
    const id: number = 2;
    customerService.DeleteCustomerByID(id).subscribe(response => expect(response).toEqual(customerAfterDelete))
    const req = httptestcontroller.expectOne({
      method: 'DELETE',
      url: `${URL}/${id}`,
    });

    req.flush(customerAfterDelete);
  })
  it('should call updateCustomer and return the updatedcustomer from the API', () => {
    let id: number = 3
    const body = {
      "customerid": 3,
      "name": "Ram",
      "website": "website3",
      "address": "India"
    };

    customerService.updateCustomer(body).subscribe((data) => {
      expect(data).toEqual(body);
    });

    const req = httptestcontroller.expectOne({
      method: 'PUT',
      url: `${URL}/${id}`,
    });

    req.flush(body);
  });
  it('should be retrieve customer details by ID', () => {
    let id: number = 2
    customerService.getCustomerById(id).subscribe(response =>
      expect(response).toEqual(mockCustomersList[0]))
    const req = httptestcontroller.expectOne({
      method: 'GET',
      url: `${URL}/${id}`,
    });

    req.flush(mockCustomersList[0]);
  })
  it('should be retrieve all users ofcustomer by ID', () => {
    let id: number = 2
    customerService.getAllUsersOfCustomer(id).subscribe(response =>
      expect(response).toEqual(mockUsers));
    const req = httptestcontroller.expectOne({
      method: 'GET',
      url: `${URL}/${id}/users`,
    });

    req.flush(mockUsers);
  })

});

