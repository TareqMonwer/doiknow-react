import Sidebars from '../Sidebars/Sidebars';
import Products from '../Products/Products';
import MobileProductFilter from '../MobileProductFilter/MobileProductFilter';

const HomeLayout = () => {
    return (
        <div className="container flex pt-3 justify-between flex-col md:flex-row">
            <Sidebars />

            <div className="main-content w-full px-3 md:w-73p sm:px-0 text-gray-700">

                {/* Mobile Filter Control */}
                <MobileProductFilter />

                {/* All Products */}
                <Products />

                {/* Payment methods */}
                <div className="payment-methods justify-center 
                align-center my-32 hidden md:flex">
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