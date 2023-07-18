import { API_URL, getAuthUrl } from '@/config/api.config';
import { AuthService } from '@/servises/auth.service';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithupProvider from 'next-auth/providers/github';
import { AuthUserResponse } from '@/store/user/user.interface';
import { setCookie } from '@/utils/cookies-persistance';

export default (req: NextApiRequest, res: NextApiResponse) => {
	return nextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
			}),
			GithupProvider({
				clientId: process.env.NEXT_PUBLIC_GITHUP_CLIENT_ID as string,
				clientSecret: process.env.NEXT_PUBLIC_GITHUP_CLIENT_SECRET as string,
			}),
		],
		secret: process.env.NEXT_PUBLIC_SECRET_AUTH,
		callbacks: {
			async signIn({ user }) {
				if (user) {
					const email = user.email as string;
					const checkUser = await AuthService.chechUser(email);
					if (checkUser === 'user') {
						const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('login')}`, {
							email,
							password: '',
						});
						setCookie(res, 'next-auth.access-token', response.data.accessToken, {
							path: '/',
							secure: true,
							maxAge: 2592000,
						});
						return true;
					} else if (checkUser === 'no-user') {
						const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('register')}`, {
							email,
							password: '',
						});
						setCookie(res, 'next-auth.access-token', response.data.accessToken, {
							path: '/',
							secure: true,
							maxAge: 2592000,
						});
						return true;
					}
				}
				return false;
			},
		},
	});
};
