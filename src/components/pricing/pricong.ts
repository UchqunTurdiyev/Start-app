export interface PricongProps {
	title: string;
	price: number;
	options: Array<{ id: number; desc: string }>;
	checked?: boolean;
}
