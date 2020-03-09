import { Partner } from './partner';
import { Deposits } from './deposits';
import { User } from './user';

export interface Account {
  id: number;
  accountNumber: number;
  amount: number;
  owner?: Partner;
  balance: number;
  deposits?: Deposits[];
  creator?: User;


}
