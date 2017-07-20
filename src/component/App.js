import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ContactList from './ContactList';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import createHistory from 'history/createBrowserHistory'

const browserHistory = createHistory();

class App extends Component {

    render() {

        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/new-contact"} component={()=>(<div><Header/><ContactForm/><Footer/></div>)}/>
                    <Route exact path={"/all-contact"} component={ContactList}/>
                </Switch>
            </Router>
        )
    }
}

export default App;