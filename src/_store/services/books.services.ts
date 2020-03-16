import {IBook, IBookPending} from "../interfaces/books.interfaces";
import {of} from "rxjs";


export const getBooks = () => {
    const db = JSON.parse(localStorage.getItem('db') as string)
    return of(db)
};

export const editBooks = () => {
    const db = JSON.parse(localStorage.getItem('db') as string)
    return of(db)
};

export const getBookById = (id: string) => {
    const db = JSON.parse(localStorage.getItem('db') as string)
    const book = db.find((b: IBook) => b.id === id)
    return of(book)
};

export const addBook = (book: IBookPending) => {
    const db = JSON.parse(localStorage.getItem('db') as string)
    const newBook = {
        ...book,
        id: String(Math.floor(Math.random()*10000))
    };
    db.push(newBook)
    localStorage.setItem('db', JSON.stringify(db))
    return of(newBook)
};

export const deleteBook = (bookId: string) => {
    const db = JSON.parse(localStorage.getItem('db') as string)
    const newDB = db.filter((el: IBook) => {
        return el.id !== bookId
    });
    localStorage.setItem('db', JSON.stringify(newDB))
    return of(bookId)
}
