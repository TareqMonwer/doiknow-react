import Sidebars from '../Sidebars/Sidebars';
import Products from '../Products/Products';
import './HomeLayout.scss';

const HomeLayout = () => {
    return (
        <div className="container flex pt-3 justify-between">
            <Sidebars />

            <div className="main-content w-full px-3 sm:w-73p px-0 text-gray-700">
                <Products />

                <div className="payment-methods flex justify-center align-center my-32">
                    <img className="mr-2" src="https://i.imgur.com/HlheQoO.png" alt="" />
                    <img className="mr-2" src="https://i.imgur.com/DZxNJQZ.png" alt="" />
                    <img className="mr-2" src="https://i.imgur.com/CdZ3Ka0.png" alt="" />
                    <img className="mr-2" src="https://i.imgur.com/eXKueNu.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeLayout;