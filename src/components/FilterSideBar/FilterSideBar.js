const FilterSideBar = () => {
    return (
        <div className="sidebar filter-sidebar bg-white p-4 border border-gray-100 shadow-md">
            <div className="flex justify-between pb-3 border-b border-gray-100">
                <span className="text-gray-500 uppercase">
                    filters
                </span>
                <button className="text-yellow-500 uppercase">
                    reset
                </button>
            </div>

            <div className="sidebar-title font-semibold py-2">
                Price
                    </div>
            <div className="border border-gray-100 px-2 mb-5">
                <div className="price-range p-2">
                    <form className="w-full">
                        <input className="w-full" type="range" name="price-range" id="price-range"
                            min="100" max="100000" />
                    </form>
                    <div className="flex justify-between">
                        <span>$100</span>
                        <span>$100000</span>
                    </div>
                </div>
            </div>

            <div className="sidebar-title font-semibold py-2">
                Categories
                    </div>
            <form className="w-full border border-gray-100 mb-5 bg-gray-100
                            rounded-lg flex justify-center">
                <select name="category" id="category" className="p-2 text-gray-500
                            rounded-lg bg-gray-100 focus:outline-none" style={{ width: '95%' }}>
                    <option value="0" selected>Category name</option>
                    <option value="1">Sharee</option>
                    <option value="2">Lehenga</option>
                    <option value="3">Dress</option>
                </select>
            </form>

            <div className="sidebar-title font-semibold py-2 text-base">
                Suggested
                    </div>
            <div className="suggested-categories w-11/12 grid grid-cols-3 gap-1 mb-5 text-center">
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
                <a href="#todo" className="bg-gray-100 py-1 px-2 rounded-lg">Sharee</a>
            </div>

            <div className="sidebar-title font-semibold mb-4">
                Brands
                    </div>
            <div className="brands pl-5 flex flex-col">
                <a href="#todo">Vital</a>
                <a href="#todo">Yashal</a>
                <a href="#todo">Pinks: 03</a>
                <a href="#todo">Pinks Vol: 02</a>
                <a href="#todo">Panache</a>
            </div>
        </div>
    );
}

export default FilterSideBar;