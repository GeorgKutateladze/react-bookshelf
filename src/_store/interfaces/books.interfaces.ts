export interface IBookPending {
    image: string;
    title: string;
    author: string;
    year: string
}

export interface IBook extends IBookPending {
    id: string;
}
