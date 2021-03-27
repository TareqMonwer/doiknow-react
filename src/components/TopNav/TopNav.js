import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    faHeart as farHeart,
    faUser as farUser
} from '@fortawesome/free-regular-svg-icons'
import './TopNav.scss';


const TopNav = () => {
    return (
        <div class="top-nav w-full py-2 bg-white shadow-xs
            border-b border-gray-300">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div class="text-lg hidden md:flex">
                    Tail-kit
            </div>
                <span class="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-md flex">
                    <input type="search" name="serch" placeholder="Search now" class="flex-grow px-4 text-sm rounded-l-md focus:outline-none" />
                    <button type="submit" className="bg-indigo-900 text-white px-5 py-2 rounded-r-md">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </span>
                <div class="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
                    <button>
                        <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="flex items-center hidden md:flex">
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