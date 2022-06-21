export interface News {
	title: string;
	date: Date;
	image: string; // under public/news
	size: "1x1" | "1x2" | "2x1" | "2x2" | "2x3" | "3x2" | "3x3";
	body: string;
}
