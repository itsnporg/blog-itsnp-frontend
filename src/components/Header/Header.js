import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';
import paths from 'paths';

export default props => {
    return(
        <div className="Header">
            <div className="Header__Nav">
                <ul>
                    <li> <Link to={paths.home}>Home</Link> </li>
                    <li> <Link to={paths.about}>About</Link> </li>
                </ul>
            </div>
        </div>
    );
}