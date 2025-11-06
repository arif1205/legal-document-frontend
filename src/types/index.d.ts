export type Match = {
	docId: string;
	title: string;
	score: number;
	text: string;
};

export type GenerateResponse = {
	success: boolean;
	error?: string;
	data?: {
		query: string;
		summary: string;
		matches: Match[];
	};
};
