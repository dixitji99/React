import { useLocation } from 'react-router-dom';
import './aboutbook.style.scss'


const AboutBook = () => {
    const location = useLocation();
    return (
        <div className="book-details">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                        <div className="card">
                            <img src={location.state._image} alt="image1" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-mg-9 col-lg-9 d-f c-c">
                        <h3 >{location.state._name}</h3>
                        <h6>${location.state._price}</h6>
                        <h6>{location.state._author}</h6>
                        <h6>Page Count:{location.state._page}</h6>
                        <h6>Book ISBN: {location.state._ISBN}</h6>
                        <div className="mt-3">
                            <button className="btn btn-primary mx-2">Add to Cart</button>
                        <button className="btn btn-primary mx-2">Buy Now</button>
                    </div>
                    <div className="mt-3 mx-2">
                        <textarea name="description" id="bookDescription" className="px-3" disabled>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident nam distinctio harum? Atque voluptates impedit quasi rerum, doloribus, asperiores iusto fugiat assumenda ut inventore voluptatibus quae quidem repellat perferendis!
                        </textarea>
                    </div>
                </div>
            </div>
        </div>            
        </div >
    )
}

export default AboutBook
