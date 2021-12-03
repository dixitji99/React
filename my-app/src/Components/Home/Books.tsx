import React from 'react'
import { BookModel } from '../../Model/BookModel'
import Book from './Book'
import "./books.style.scss"
import { BooksData } from './BooksData'

const Books = () => {
    return (
        <div className="books">
            {BooksData.map((book) => (
                <div>
                    <Book book={book} />
                </div>
            ))}
        </div>
    )
}

export default Books
