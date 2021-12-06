import Book from './Book'
import "./books.style.scss"
import { useSelector } from 'react-redux'

const Books = () => {
    const books=useSelector((state:any)=>state.allBooks.products);
    return (
        <div className="books">
            {books.map((book:any) => (
                <div key={book._id}>
                    <Book book={book} />
                </div>
            ))}
        </div>
    )
}

export default Books
