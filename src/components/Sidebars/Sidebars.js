import FilterSideBar from '../FilterSideBar/FilterSideBar';

const Sidebars = () => {
    return (
        <div className="sidebar-wrapper w-1/4 text-gray-700 hidden
        md:block">
            <FilterSideBar />
        </div>
    );
}

export default Sidebars;