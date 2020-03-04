import { User } from './user';

export interface Partner {
    id: number;
    user: User,
    ninea: string,
    rc: number,
    country: string,
    city: string,
    address: string,
    phone: string
}
