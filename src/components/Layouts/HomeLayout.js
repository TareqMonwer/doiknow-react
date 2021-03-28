import Sidebars from '../Sidebars/Sidebars';
import Products from '../Products/Products';

const HomeLayout = () => {
    return (
        <div className="container flex pt-3 justify-between">
            <Sidebars />

            <div className="main-content w-full px-3 md:w-73p sm:px-0 text-gray-700">

                <div className="m-filter flex justify-between px-5 py-3 bg-gray-50 
                mb-5 sm:hidden">
                    <span className="text-gray-500 uppercase">
                        Filters
                    </span>
                    <button className="text-yellow-500 uppercase">
                        reset
                    </button>
                </div>

                <Products />

                <div className="payment-methods flex justify-center 
                align-center my-32 hidden md:block">
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