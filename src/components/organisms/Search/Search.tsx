import React from 'react';
import './Search.css'
import {useDispatch} from "react-redux";
import {SetFilter} from "../../../_store/actions/books.actions";

const Search = () => {
    const dispatch = useDispatch();
    const setFilter = (event: React.ChangeEvent) => {
        dispatch({type: SetFilter.Success, payload: (event.target as HTMLInputElement).value.toLowerCase()})
    };
    return (
        <div className='search'>
            <input autoComplete="off" onChange={setFilter} type="text" placeholder="Searching for the book?"/>
        </div>
    );
};

export default Search;
