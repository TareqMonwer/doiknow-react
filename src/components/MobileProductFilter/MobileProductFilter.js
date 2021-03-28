import { useDispatch } from 'react-redux';
import { showFilter } from '../../actions';


const MobileProductFilter = () => {
    const dispatch = useDispatch();

    const handleShowFilter = () => {
        // freeze body from scrolling.
        document.body.style.position = 'fixed';
        // show filter.
        dispatch(showFilter())
    }

    return (
        <div className="m-filter flex justify-between px-5 py-3 bg-gray-50 
            mb-5 sm:hidden">
            <button className="text-gray-500 uppercase focus:outline-none"
                onClick={() => handleShowFilter()}>
                Filters
            </button>
            <button className="text-yellow-500 uppercase focus:outline-none">
                reset
            </button>
        </div>
    );
}

export default MobileProductFilter;