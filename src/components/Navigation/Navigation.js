import React from 'react';
import './navigation.scss'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#section1" className="nav-link">Section 1</a>
                        </li>
                        <li className="nav-item">
                            <a href="#section2" className="nav-link">Section 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;