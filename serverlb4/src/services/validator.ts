import {HttpErrors} from '@loopback/rest';
import isEmail from 'isemail';
import {Credentials} from '../repositories';

export function validateCredentials(credentials: Credentials) {
  if (!isEmail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('invalid Email');
  }
  if (credentials.password.length < 6) {
    throw new HttpErrors.UnprocessableEntity(
      'Password length less then 6 characters',
    );
  }
}
