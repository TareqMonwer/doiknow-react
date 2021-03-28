import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    faHeart as farHeart,
    faUser as farUser
} from '@fortawesome/free-regular-svg-icons'


const MobileMenu = () => {
    return (
        <div className="w-full p-5 flex items-center justify-between bg-white sm:hidden">
            <div className="menuToggler">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo h-12">
                <a href="#todo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/DPI-logo.png" alt=""
                    class="h-full" />
                </a>
            </div>
            <div className="user-actions-menu flex">
                <div className="menu-item mr-3">
                    <a href="#todo">
                        <FontAwesomeIcon icon={farUser} />
                    </a>
                </div>
                <div className="menu-item">
                    <a href="todo">
                        <FontAwesomeIcon icon={farHeart} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;