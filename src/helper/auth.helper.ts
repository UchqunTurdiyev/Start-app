import { AuthTokens, AuthUserResponse } from '@/store/user/user.interface';
import Cookies from 'js-cookie';

export const saveTokensCookie = (data: AuthTokens) => {
	Cookies.set('next-auth.access-token', data.accessToken);
};

export const saveStorage = (data: AuthUserResponse) => {
	saveTokensCookie(data);
};

export const removeTokensCookie = () => {
	Cookies.remove('next-auth.access-token');
	Cookies.remove('refreshToken');
};
