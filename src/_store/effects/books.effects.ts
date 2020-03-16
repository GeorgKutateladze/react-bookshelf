import {ActionsObservable, ofType} from "redux-observable";
import {Action} from "redux-actions";
import {AddBook, DeleteBook, GetBookById, GetBook} from "../actions/books.actions";
import {map, switchMap} from "rxjs/operators";
import {IBook} from "../interfaces/books.interfaces";
import {addBook, deleteBook, getBookById, getBooks} from "../services/books.services";

export const GetBookEffect$ = (actions$: ActionsObservable<Action<undefined>>) =>
    actions$.pipe(
        ofType(GetBook.Pending),
        switchMap((action) => {
            return getBooks().pipe(
                map((data: IBook[]) => {
                    return {
                        type: GetBook.Success,
                        payload: data
                    }
                })
            )
        })
    );

export const AddBookEffect$ = (actions$: ActionsObservable<Action<IBook>>) =>
    actions$.pipe(
        ofType(AddBook.Pending),
        switchMap((action) => {
            return addBook(action.payload).pipe(
                map((data: IBook) => {
                    return {
                        type: AddBook.Success,
                        payload: data
                    }
                })
            )
        })
    );

export const DeleteBookEffect$ = (actions$: ActionsObservable<Action<string>>) =>
    actions$.pipe(
        ofType(DeleteBook.Pending),
        switchMap((action) => {
            return deleteBook(action.payload).pipe(
                map((data: string) => {
                    return {
                        type: DeleteBook.Success,
                        payload: data
                    }
                })
            )
        })
    );

export const GetBookById$ = (actions$: ActionsObservable<Action<string>>) =>
    actions$.pipe(
        ofType(GetBookById.Pending),
        switchMap((action) => {
            return getBookById(action.payload).pipe(
                map((data: IBook | undefined) => {
                    return {
                        type: GetBookById.Success,
                        payload: data
                    }
                })
            )
        })
    );
