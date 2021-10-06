import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar({title}) {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img 
                src="/favicon.svg" 
                alt="" width="30" height="24" 
                className="d-inline-block align-text-top"
            />
            {title}
            </a>
        </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}
