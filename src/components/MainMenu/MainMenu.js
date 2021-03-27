import './MainMenu.scss';

const MainMenu = () => {
    return (
        <div className="main-menu w-full p-2 border-b border-gray shadow-md">
            <div className="flex items-center justify-between w-3/4 ml-auto mr-8">
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
                <div className="right-menu flex">
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