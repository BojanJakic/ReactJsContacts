import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = (props) => {

    return (
        <div>
            <Header/>
            <ul>
                <li className="ul-title"><h4>HELLO USER !</h4></li>
                <li>NEW CONTACT - Save new contact in local storage</li>
                <li>CONTACT LIST - See all contact saved in local storage</li>
            </ul>
            <div className="center-image">
                <img src={'images.jpg'} className="img-responsive img-home" alt=""/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
