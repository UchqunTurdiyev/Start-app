import { UserType } from '@/interfaces/user.interfaces';

export interface UserInitialStateType {
	user: UserType | null;
	isLoading: boolean;
}
