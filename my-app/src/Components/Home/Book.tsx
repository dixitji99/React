import { BookModel } from '../../Model/BookModel'
import './book.style.scss'
import { useNavigate } from "react-router-dom";

interface BookProps {
    book: BookModel;
}



const Book = ({ book }: BookProps) => {
    const navigate = useNavigate();        
    const routeChange = () => {
        navigate('/'+book._name,{state:book});
    }
    
    return (
        <div className="book" id={book._ISBN}>
            <img src={book._image} alt="" onClick={routeChange} />
            <label htmlFor="book-name">{book._name}</label>
            <label htmlFor="book-price"><i>${book._price}</i></label>
            <button>Buy Now</button>
        </div>
    )
}

export default Book;
