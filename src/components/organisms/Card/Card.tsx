import React from 'react';
import './Card.css';
import {IBook} from "../../../_store/interfaces/books.interfaces";
import {useDispatch} from "react-redux";
import {DeleteBook} from "../../../_store/actions/books.actions";
import {NavLink} from "react-router-dom";

interface IProps {
    book: IBook;
}

const Card: React.FC<IProps> = ({book}) => {
    const dispatch = useDispatch();
    const deleteBook = (payload: string) => {
        dispatch({type: DeleteBook.Pending, payload})
    }


    return (
        <div className='card'>
            <div className="card__image">
                <img src="https://via.placeholder.com/270x250/FFFFFF" alt=""/>
            </div>
            <div className="card__title">{book.title}</div>
            <div className="card__author">{book.author}</div>
            <div className="card__year">{book.year}</div>
            <div className="card__footer">
                <div className="card__edit-button">
                    <NavLink to={`/add/${book.id}`}>
                        <p>Edit</p>
                    </NavLink>
                </div>
                <div className="card__delete-button" onClick={() => deleteBook(book.id)}>
                    <p>Delete</p>
                </div>
            </div>

        </div>
    );
};

export default Card;
