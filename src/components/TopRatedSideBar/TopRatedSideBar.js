import TopItem from '../TopItem/TopItem';

const TopRatedSideBar = () => {
    return (
        <div className="toprated-sidebar mt-3 filter-sidebar bg-white p-4 border border-gray-100 shadow-md">
            <div className="sidebar-title font-semibold pb-5">
                Top Rated
            </div>
            
            <div className="toprated-items">
                <TopItem />
                <TopItem />
                <TopItem />
            </div>
        </div>
    );
}

export default TopRatedSideBar;