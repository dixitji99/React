import { useLocation } from 'react-router-dom';
import './aboutbook.style.scss'

const AboutBook = () => {
    const location = useLocation();
    return (
        <div className="about-book">
            <div className="about-book__image">
                <img src={location.state._image} alt="image1" className="about-book__image--cover-image" />
            </div>
            <div className="about-book__information">
                <span className="about-book__information--title">{location.state._name}</span>
                <span className="about-book__information--price">${location.state._price}</span>
                <span className="about-book__information--author">{location.state._author}</span>
                <span className="about-book__information--pages"><strong style={{color:"black"}}>Page Count: </strong>{location.state._page}</span>
                <span className="about-book__information--isbn"><strong style={{color:"black"}}>Book ISBN: </strong>{location.state._ISBN}</span>
                <div className="about-book__cart-buttons">
                    <button className="about-book__cart-buttons--btn">Add to Cart</button>
                    <button className="about-book__cart-buttons--btn">Buy Now</button>
                </div>
                <div className="about-book__description">
                    <p className="about-book__description--para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero fugit sint animi dolore accusamus magnam delectus temporibus voluptates sunt explicabo aliquam quis, maxime minima quibusdam perferendis porro voluptate deleniti!</p>                    
                </div>
            </div>
        </div>
    )
}

export default AboutBook
