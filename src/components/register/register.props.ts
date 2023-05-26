export interface RegisterProps {
	onNavigationStateComponent: (component: 'login' | 'register' | 'verification' | 'account-recovery') => void;
}
