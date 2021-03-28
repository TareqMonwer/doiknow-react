import Sidebars from '../Sidebars/Sidebars';
import Products from '../Products/Products';
import './HomeLayout.scss';

const HomeLayout = () => {
    return (
        <div className="container flex pt-3 justify-between">
            {/* Sidebar Components */}
            <Sidebars />

            {/* Products List Container */}
            <div className="main-content w-73p text-gray-700">
                {/* Products */}
                <Products />
            </div>
        </div>
    );
}

export default HomeLayout;