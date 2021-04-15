import { Query } from '../';
import type { IRegisterBody, UsersTable } from '../../types';

export const insert = (newUser: IRegisterBody) => {
    return Query('INSERT INTO users SET ?', newUser);
}