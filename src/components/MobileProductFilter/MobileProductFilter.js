const MobileProductFilter = () => {
    return (
        <div className="m-filter flex justify-between px-5 py-3 bg-gray-50 
                mb-5 sm:hidden">
            <span className="text-gray-500 uppercase">
                Filters
                    </span>
            <button className="text-yellow-500 uppercase">
                reset
                    </button>
        </div>
    );
}

export default MobileProductFilter;