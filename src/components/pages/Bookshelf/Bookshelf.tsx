import React from 'react';
import './Bookshelf.css'
import Search from "../../organisms/Search/Search";
import Card from "../../organisms/Card/Card";
import {IBook} from "../../../_store/interfaces/books.interfaces";
import {useSelector} from "react-redux";
import {selectBooks} from "../../../_store/selectors/books.selectors";

const Bookshelf = () => {

    const books: IBook[] = useSelector(selectBooks);

    const booksJSX = books.map((b: IBook) => <Card key={b.id} book={b}/>);

    return (
        <div className='bookshelf'>
            <Search />
            <section className="books">
                {booksJSX}
            </section>
        </div>
    );
};

export default Bookshelf;
