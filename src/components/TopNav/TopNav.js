import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    faHeart as farHeart,
    faUser as farUser
} from '@fortawesome/free-regular-svg-icons'
import './TopNav.scss';


const TopNav = () => {
    return (
        <div className="top-nav w-full px-5 sm:p-2 sm:px-0 bg-white shadow-xs
            sm:border-b sm:border-gray-300">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div className="h-12 hidden md:flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/DPI-logo.png" alt=""
                    className="h-full" />
                </div>
                <span className="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 
                    text-sm rounded-md flex">
                    <input type="search" name="serch" placeholder="Search now" className="flex-grow px-4 text-sm rounded-l-md focus:outline-none" />
                    <button type="submit" className="bg-indigo-900 text-white px-5 py-2 rounded-r-md">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </span>
                <div className="flex items-center hidden md:flex">
                    <div className="menu-item">
                        <a href="#todo">
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={farUser} />
                            </span>
                            Login/ Signup
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="todo">
                            <span className="menu-icon">
                                <FontAwesomeIcon icon={farHeart} />
                            </span>
                            <span className="fav-counter px-1 border border-gray-900">01</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;