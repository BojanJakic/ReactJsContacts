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
        }
    }

    componentDidMount = () => {
        if (this.state.contacts.length === 0) {
            this.notifyUser();
        }

    };

    handleEditButton = (index) => {
        this.setState({buttonAction: "EDIT"});
        this.modal.openModal(index)
    };

    handleDeleteButton = (index) => {
        this.setState({buttonAction: "DELETE"});
        this.modal.openModal(index)
    };

    reloadContacts = () => {
        this.setState({contacts: getContactList()});
        this.notifyUser();
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
                                                onClick={() => this.handleEditButton(index)}>Edit
                                        </button>
                                        <button className="btn btn-primary"
                                                onClick={() => this.handleDeleteButton(index)}>Delete
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <ModalForm ref={modal => this.modal = modal} init={this.state.contacts}
                               buttonAction={this.state.buttonAction} reloadAfterClick={() => this.reloadContacts()}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactList;
