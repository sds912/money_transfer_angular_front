import { User } from './user';
import { Account } from './account';

export interface Partner {
    id: number;
    user: User;
    ninea: string;
    rc: number;
    country: string;
    city: string;
    address: string;
    phone: string;
    accounts?: Account;
}
