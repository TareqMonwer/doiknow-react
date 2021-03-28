import React from 'react';
import SocialMenu from '../SocialMenu/SoicalMenu';
import TopNav from '../TopNav/TopNav';
import MainMenu from '../MainMenu/MainMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
    return (
        <React.Fragment>
            <SocialMenu />
            <MobileMenu />
            <TopNav />
            <MainMenu />
        </React.Fragment>
    );
}

export default Header;
