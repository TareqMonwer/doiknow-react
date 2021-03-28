import Breadcrumb from '../Breadcrumb/Breadcrumb';
import HomeLayout from './HomeLayout';


const MainLayout = () => {
    return (
        <div className="pt-0 md:pt-5 container mx-auto">
            <Breadcrumb />
            <HomeLayout />
        </div>
    );
}

export default MainLayout;