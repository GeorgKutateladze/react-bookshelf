import React from 'react';
import './Navbar.css'
import Button from "../../atoms/Button/Button";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <NavLink to="/">
                    <h1>Bookshelf</h1>
                </NavLink>
            </div>
            <Button />
        </div>
    );
};

export default Navbar;
