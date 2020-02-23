import './AddBook.css'
import React from 'react';
import { useReactiveForm } from 'use-reactive-form';
import {useDispatch} from "react-redux";
import {AddBook} from "../../../_store/actions/books.actions";

const AddBook = () => {
    const fields = {
        title: '',
        author: '',
        year: ''
    };
    const config = {
        fields
    };
    const {values, ref} = useReactiveForm(config);

    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch({type: AddBook.Pending, payload: values});




    return (
        <div className="add-book">
            <form ref={ref} onSubmit={handleSubmit}>
                <div className='add add_title'>
                    <input name='title' type="text" placeholder="Book Title"/>
                </div>
                <div className='add add__author'>
                    <input name='author' type="text" placeholder="Who wrote it?"/>
                </div>
                <div className='add add__year'>
                    <input name='year' type="text" placeholder="What year?"/>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
