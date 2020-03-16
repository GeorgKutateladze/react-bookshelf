import {createActions} from 'redux-actions'
import {IBook} from "../interfaces/books.interfaces";

export enum GetBook {
    Pending = '[Pending] Получение книги',
    Success = '[Success] Получение книги'
}

export enum AddBook {
    Pending = '[Pending] Добавление книги',
    Success = '[Success] Добавление книги'
}

export enum EditBook {
    Pending = '[Pending] Обновление книги',
    Success = '[Success] Обновление книги'
}

export enum GetBookById {
    Pending = '[Pending] Получение книги по ID',
    Success = '[Success] Получение книги по ID'
}

export enum DeleteBook {
    Pending = '[Pending] Удаление книги',
    Success = '[Success] Удаление книги'
}

export enum SetFilter {
    Success = '[Success] Поиск книги'
}

createActions({
    [GetBook.Pending]: undefined,
    [GetBook.Success]: (payload: IBook[]) => payload,

    [AddBook.Pending]: (payload: IBook) => payload,
    [AddBook.Success]: (payload: IBook) => payload,

    [EditBook.Pending]: (payload: IBook) => payload,
    [EditBook.Success]: (payload: IBook) => payload,

    [GetBookById.Pending]: (payload: string) => payload,
    [GetBookById.Success]: (payload: string) => payload,

    [DeleteBook.Pending]: (payload: string) => payload,
    [DeleteBook.Success]: (payload: string) => payload,

    [SetFilter.Success]: (payload: string) => payload
});
