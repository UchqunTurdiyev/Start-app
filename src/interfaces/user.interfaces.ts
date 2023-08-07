import { RoleUser } from './constants.interfaces';

export interface UserType {
	email?: string;
	fullName?: string;
	role?: RoleUser;
	createdAt?: string;
	password?: string;
	avatar?: string;
}
