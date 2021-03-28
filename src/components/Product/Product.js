import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart as farHeart
} from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Product.scss';

const Product = (props) => {
    return (
        <div className="single-product border border-gray-200 bg-white p-2 rounded-lg shadow-sm">
            <div className="image-contents">
                <img src={props.imgUrl} alt="" className="rounded-sm" />
                <div className="product-metadata flex justify-between">
                    <div className="tag">
                        <a href="#todo" className="py-1 px-3 text-center uppercase bg-yellow-500 text-white
                        text-sm">
                            new
                        </a>
                    </div>
                    <button className="favorite rounded-full h-7 w-7 flex items-center justify-center bg-white">
                        {props.isFavorite ?
                            (<FontAwesomeIcon icon={faHeart} />)
                            :
                            (<FontAwesomeIcon icon={farHeart} />)
                        }
                    </button>
                </div>
            </div>
            <p>Green Colour Muslin Jamdani Saree</p>
            <div className="price font-semibold my-3 text-indigo-700">
                $599.00
            </div>
        </div>
    );
}

export default Product;