import { Role } from './role';

export interface User {
    id: number,
    username: string,
    password: string,
    fName: string,
    lName: string,
    phone: String,
    email: String,
    address: String,
    isActive: boolean,
    userRoles: Role
}

