import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {GetBook} from "./_store/actions/books.actions";
import Router from "./Router";
import Navbar from "./components/organisms/Navbar/Navbar";

const App: React.FC = () => {
    const dispatch = useDispatch();

    // onMount
    useEffect(() => {
        dispatch({type: GetBook.Pending})

        if (!localStorage.getItem('db')) {
            localStorage.setItem('db', JSON.stringify([]))
        }
    });

    return (
        <div>
            <Navbar/>
            <Router/>
        </div>
    );
};

export default App;
