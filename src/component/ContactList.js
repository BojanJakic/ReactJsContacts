import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Notification from './Notification';
import ModalForm from './ModalForm';
import ContactOverview from './ContactOverview';
import {getContactList} from '../js/contactCRUD.js'
import '../style/ContactList.css';


class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonAction: "",
            contacts: getContactList(),
            clickedContactIndex : "",
            closeModal : false
        }
    }

    componentDidMount = () => {
        if (this.state.contacts.length === 0) {
            this.notifyUser();
        }

    };

    onClickHandler = (evt,index) => {
        var buttonText = evt.target.textContent;
        this.setState({buttonAction : buttonText ,clickedContactIndex : index});

    };

    reloadContacts = () => {
        this.setState({contacts: getContactList(), closeModal : true});
        this.notifyUser();
        this.setState({buttonAction : ""})
    };

    notifyUser = () => {
        var action = this.state.buttonAction || 'EMPTY';
        this.notification.prepareNotification(action);
    };

    render = () => {

        return (
            <div>
                <Header/>
                <Notification ref={notification => this.notification = notification}/>
                <div className="row ">

                    {
                        this.state.contacts.map((currentContact, index) => {

                            return (
                                <div className="contact-container" key={currentContact.id}>
                                    <div className={(index % 2 === 0 ? 'clearfix' : '')}></div>
                                    <div className=" col-sm-5 col-md-5 col-lg-5 contact">
                                        <ContactOverview currentContact={currentContact} iteration={index}/>
                                        <div className="text-center">
                                        <button className="btn btn-primary"
                                                onClick={(evt) => this.onClickHandler(evt, index)}>EDIT
                                        </button>
                                        <button className="btn btn-primary"
                                                onClick={(evt) => this.onClickHandler(evt, index)}>DELETE
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {this.state.buttonAction !== '' && <ModalForm index={this.state.clickedContactIndex} init={this.state.contacts}
                               buttonAction={this.state.buttonAction} reloadContactList={() => this.reloadContacts()} shouldCloseModal={this.state.closeModal}/>}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactList;
