import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
        <div>
            <div className="row header">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 header-title">ReactJS Contact List</div>
            </div>
            <div className="row">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-contact">New Contact</Link></li>
                            <li><Link to="/all-contact">Contact List</Link></li>
                            <li><a href="https://github.com/BojanJakic/ReactJsContacts" target="_blank" rel="noopener noreferrer">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Header;