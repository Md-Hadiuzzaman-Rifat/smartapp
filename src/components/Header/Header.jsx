import React from 'react';
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <div className={`${classes.header}`}>
            <div className={`${classes.header_logo}`}>
                <h1>Smart App</h1>
            </div>
            <div className="header_navigation">
                <nav>
                    <ul>
                        <li><a href="#">service</a></li>
                        <li><a href="#">experience</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">testimonials</a></li>
                        <li><a href="#">+880 1910803372</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;