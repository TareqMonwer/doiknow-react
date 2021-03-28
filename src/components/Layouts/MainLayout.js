import Breadcrumb from '../Breadcrumb/Breadcrumb';
import HomeLayout from './HomeLayout';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const MainLayout = () => {
    return (
        <div>
            <div className="pt-0 md:pt-5 container mx-auto">
                <Breadcrumb />
                <HomeLayout />
            </div>
            <ShoppingCart />
        </div>
    );
}

export default MainLayout;