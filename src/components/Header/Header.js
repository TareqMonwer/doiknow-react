import React from 'react';
import SocialMenu from '../SocialMenu/SoicalMenu';
import TopNav from '../TopNav/TopNav';
import MainMenu from '../MainMenu/MainMenu';

function Header() {
    return (
        <React.Fragment>
            <SocialMenu />
            <TopNav />
            <MainMenu />
        </React.Fragment>
    );
}

export default Header;
