import './MainMenu.scss';

const MainMenu = () => {
    return (
        <div className="main-menu w-full py-3 px-5 md:px-2 bg-white border-b border-gray shadow-md">
            <div className="flex items-center justify-between w-3/4 md:ml-auto md:mr-8">
                <div className="left-menu flex">
                    <div className="menu-item">
                        <a href="#todo">
                            Campaigns
                            </a>
                    </div>
                    <div className="menu-item">
                        <a href="#todo">
                            Offers
                            </a>
                    </div>
                    <div className="menu-item">
                        <a href="#todo">
                            Gift Card
                            </a>
                    </div>
                </div>
                <div className="right-menu hidden md:flex md:block">
                    <div className="menu-item">
                        <a href="#todo">
                            Outlets
                            </a>
                    </div>
                    <div className="menu-item">
                        <a href="#todo">
                            About Us
                            </a>
                    </div>
                    <div className="menu-item">
                        <a href="#todo">
                            Help
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;