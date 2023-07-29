import { UserType } from '@/interfaces/user.interfaces';

export interface UserInitialStateType {
	user: UserType | null;
	isLoading: boolean;
	error: string | null | unknown;
}

export interface AuthTokens {
	refreshToken: string;
	accessToken: string;
}

export interface AuthUserResponse extends AuthTokens {
	user: UserType;
}

export interface InterfacesEmailAndPassword {
	password: string;
	email: string;
}

export interface InterfaceEmailAndOtp {
	email: string;
	otpVerification: string;
}

export interface InterfaceSign {
	password: string;
	email: string;
	callback?: () => void;
}
