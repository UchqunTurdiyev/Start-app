import axios from 'axios';
import { API_URL, getAuthUrl, getMailUrl } from '@/config/api.config';
import { AuthUserResponse } from '@/store/user/user.interface';
import { removeTokensCookie, saveStorage } from '@/helper/auth.helper';
import Cookies from 'js-cookie';
export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('register')}`, {
			email,
			password,
		});
		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},

	async login(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('login')}`, {
			email,
			password,
		});
		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},

	async sendOtp(email: string) {
		const response = await axios.post<'Success'>(`${API_URL}${getMailUrl('send-otp')}`, { email });
		return response;
	},

	logout() {
		removeTokensCookie();
		localStorage.removeItem('user');
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axios.post(`${API_URL}${getAuthUrl('access')}`, { refreshToken });

		if (response.data.accessToken) {
			saveStorage(response.data);
		}

		return response;
	},
};
