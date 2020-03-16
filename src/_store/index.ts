import {combineEpics, createEpicMiddleware} from "redux-observable";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import booksReducer, {IBookState} from "./reducers/books.reducer";
import {AddBookEffect$, DeleteBookEffect$, GetBookById$, GetBookEffect$} from "./effects/books.effects";

export interface IStore {
    books: IBookState;
}

const observableMiddleware = createEpicMiddleware()

const reducers = combineReducers({
    books: booksReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)))

// @ts-ignore
observableMiddleware.run(combineEpics(
    GetBookEffect$,
    AddBookEffect$,
    DeleteBookEffect$,
    GetBookById$
));
