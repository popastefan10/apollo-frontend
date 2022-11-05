export interface Section {
	title: string,
	content: string[]
}

export interface Article {
	id: number,
	title: string,
	author: string,
	sections: Section[]
}
