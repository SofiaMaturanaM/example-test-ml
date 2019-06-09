import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import Logo from '../logo/Logo';

const Header = ({ query, onSearch }) => {
    function onSearchHandler(query) {
        onSearch(query);
    }
    return (
        <header role="banner">
            <div >
                <Logo />
                <SearchBox query={query} onSearch={onSearchHandler} />
            </div>
        </header>);
};

export default Header;