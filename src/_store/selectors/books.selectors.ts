import { createSelector } from 'reselect'
import {IStore} from "../index";
import {IBook} from "../interfaces/books.interfaces";

export const selectBooks = createSelector(
    (store: IStore) => store.books.collection,
    (store: IStore) => store.books.filter,
    (books: IBook[], filter: string) => books.filter((book: IBook) => {
        let valid = true;
        if (filter
            && !book.title.toLowerCase().includes(filter)
            && !book.author.toLowerCase().includes(filter)
            && !book.year.toLowerCase().includes(filter)) {
            valid = false;
        }
        return valid
    })
)
