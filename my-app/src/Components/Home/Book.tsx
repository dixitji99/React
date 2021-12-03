import { BookModel } from '../../Model/BookModel'
import './book.style.scss'
interface BookProps{
    book:BookModel;
}

const Book= ({book}:BookProps) => {
    return (
        <div className="book" id={book._ISBN}>
            <img src={book._image} alt="" />
            <label htmlFor="book-name">{book._name}</label>
            <label htmlFor="book-price"><i>${book._price}</i></label>
            <button>Buy Now</button>
        </div>
    )
}

export default Book;
