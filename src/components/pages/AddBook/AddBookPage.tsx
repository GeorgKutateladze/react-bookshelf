import './AddBookPage.css'
import React, {useEffect} from 'react';
import useReactRouter from 'use-react-router'
import { useReactiveForm } from 'use-reactive-form';
import {useDispatch, useSelector} from "react-redux";
import {AddBook, GetBookById} from "../../../_store/actions/books.actions";
import {IStore} from "../../../_store";
import {IBook} from "../../../_store/interfaces/books.interfaces";

const AddBookPage = () => {
    const currentBook: IBook | null = useSelector((store: IStore) => store.books.selection)

    const fields = {
        title: currentBook ? currentBook.title : '',
        author: currentBook ? currentBook.author : '',
        year: currentBook ? currentBook.year : '',
    };

    const config = {
        fields,
        visible: currentBook !== null
    };
    const {values, ref} = useReactiveForm(config);
    const {history, match} = useReactRouter();

    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch({type: AddBook.Pending, payload: values()});
        history.push('/')
    };

    useEffect(() => {
        if ((match.params as {id: string}).id) {
            dispatch({type: GetBookById.Pending, payload: (match.params as {id: string}).id});
        }
    }, [dispatch])


    return (
        <div className="add-book">
            <form ref={ref} onSubmit={handleSubmit}>
                <div className='add add_title'>
                    <input autoComplete="off" name='title' type="text" placeholder="Book Title" defaultValue={values().title}/>
                </div>
                <div className='add add__author'>
                    <input autoComplete="off" name='author' type="text" placeholder="Who wrote it?" defaultValue={values().author}/>
                </div>
                <div className='add add__year'>
                    <input autoComplete="off" name='year' type="text" placeholder="What year?" defaultValue={values().year}/>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default AddBookPage;
