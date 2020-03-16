import {IBook} from "../interfaces/books.interfaces";
import {handleActions} from "redux-actions";
import {AddBook, DeleteBook, GetBookById, GetBook, SetFilter} from "../actions/books.actions";

export interface IBookState {
    collection: IBook[];
    filter: string;
    selection: IBook | null;
}

const initialState: IBookState = {
    collection: [],
    filter: '',
    selection: null
};

const booksReducer = handleActions(
    {
        [GetBook.Success]: (state: IBookState, action: any) => {
            return {
                ...state,
                collection: action.payload
            }
        },

        [AddBook.Success]: (state: IBookState, action: any) => {
            return {
                ...state,
                collection: [...state.collection, action.payload]
            }
        },

        [GetBookById.Success]: (state: IBookState, action: any) => {
            return {
                ...state,
                selection: action.payload ? action.payload : null
            }
        },

        [DeleteBook.Success]: (state: IBookState, action: any) => {
            return {
                ...state,
                collection: state.collection.filter(e => {
                    return e.id !== action.payload
                })
            }
        },

        [SetFilter.Success]: (state: IBookState, action: any) => {
            return {
                ...state,
                filter: action.payload
            }
        }
    },
    initialState
);

export default booksReducer;
