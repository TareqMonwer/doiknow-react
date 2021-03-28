import FilterSideBar from '../FilterSideBar/FilterSideBar';
import TopRatedSideBar from '../TopRatedSideBar/TopRatedSideBar';

const Sidebars = () => {
    return (
        <div className="sidebar-wrapper w-full order-1 text-gray-700 mb-10 sm:order-first md:w-1/4">
            <FilterSideBar />
            <TopRatedSideBar />
        </div>
    );
}

export default Sidebars;