import React from 'react';
import './Header.css'

const Header = ({headerExpanded}) => {
    return (
        <div className="head-container">
            <img
                src="https://seohacker.wpengine.com/wp-content/uploads/2018/05/How-to-Choose-the-Right-Domain-Name-1024x768.jpg"
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1 className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}>Name It!</h1>
        </div>
    ); 
};

export default Header;