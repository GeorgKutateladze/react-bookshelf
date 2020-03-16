import React from 'react';
import './Button.css'
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {DeleteBook} from "../../../_store/actions/books.actions";

const Button = () => {
    const dispatch = useDispatch();
    const deleteBook = (payload: string) => {
        dispatch({type: DeleteBook.Pending, payload})
    }
    return (
        <div className="button">
            <NavLink to="/add">
                <p>Add Book</p>
            </NavLink>
        </div>
    )
};

export default Button;
