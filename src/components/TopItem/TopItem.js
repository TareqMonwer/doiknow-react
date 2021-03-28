import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './TopItem.scss';


const TopItem = () => {
    return (
        <div className="top-rated-item flex">
            <div className="img-container h-40 mr-5">
                <img src="https://i.imgur.com/BG7L9fU.png" alt="" className="h-full" />
            </div>
            <div className="item-detail flex flex-col justify-center">
                <span className="font-bold text-lg text-gray-900 mb-2">
                    JH 288 A
                        </span>
                <span className="text-lg mb-2">Pinks: 03</span>
                <div className="mb-1">
                    <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-500" />
                    <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-500" />
                    <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-500" />
                    <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-500" />
                    <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-500" />

                    <span className="text-gray-400 text-xs ml-2">4.8 out 5</span>
                </div>
                <div className="font-semibold">
                    $599
                </div>
            </div>
        </div>
    );
}

export default TopItem;