import { API_URL, getAuthUrl } from '@/config/api.config';
import { AuthService } from '@/servises/auth.service';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithupProvider from 'next-auth/providers/github';
import { AuthUserResponse } from '@/store/user/user.interface';
import { serialize } from 'cookie';
import axios from 'axios';

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
					const checkUser = await AuthService.checkUser(email);
					if (checkUser === 'user') {
						const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('login')}`, {
							email,
							password: '',
						});
						res.setHeader('Set-Cookie', [
							serialize('access', response.data.accessToken, { secure: true, path: '/' }),
							serialize('refresh', response.data.refreshToken, { secure: true, path: '/' }),
						]);

						return true;
					} else if (checkUser === 'no-user') {
						const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('register')}`, {
							email,
							password: '',
						});
						res.setHeader('Set-Cookie', [
							serialize('access', response.data.accessToken, { secure: true, path: '/' }),
							serialize('refresh', response.data.refreshToken, { secure: true, path: '/' }),
						]);
						return true;
					}
				}
				return false;
			},
		},
	});
};
