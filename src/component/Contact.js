import React, {Component} from 'react';
import Notification from './Notification'
import ContactForm from './ContactForm'
import {addContact, editContact, deleteContact} from '../js/contactCRUD.js'
import {isFirstNameValid, isLastNameValid, isEmailValid, isFormValid, isPhoneValid} from '../js/customValidator.js'
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import '../style/ContactForm.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = this.init();
    }

    init = () => {
        return {
            contact: {
                id: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            },
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPhoneValid: false,
            isSubmitted: false,
        };
    };

    componentWillReceiveProps = () => {
        if (this.props.initInputValue !== undefined) {
            this.setState({contact: this.props.initInputValue})
        }

        if (this.props.buttonAction === 'DELETE') {
            var inputs = this.getAllInputs();

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('readonly', 'readonly');
            }
        }
    };

    onChangeHandler = (evt) => {
        var inputField = evt.target.name;

        switch (inputField) {
            case  'firstName' :
                this.firstNameHandler(evt);
                break;
            case 'lastName' :
                this.lastNameHandler(evt);
                break;
            case 'email' :
                this.emailHandler(evt);
                break;
            case 'phone' :
                this.phoneHandler(evt);
                break;
            default :
                alert("error")
        }
    };

    firstNameHandler = (evt) => {
        this.mergeNewStateValue(evt);
        var isValid = isFirstNameValid(evt.target);
        this.setState({isFirstNameValid: isValid})
    };

    lastNameHandler = (evt) => {
        this.mergeNewStateValue(evt);
        var isValid = isLastNameValid(evt.target);
        this.setState({isLastNameValid: isValid})
    };

    emailHandler = (evt) => {
        this.mergeNewStateValue(evt);
        var isValid = isEmailValid(evt.target);
        this.setState({isEmailValid: isValid})
    };

    phoneHandler = (evt) => {
        this.mergeNewStateValue(evt);
        var isValid = isPhoneValid(evt.target);
        this.setState({isPhoneValid: isValid});
    };

    mergeNewStateValue = (evt) => {
        var newState = update(this.state, {
            contact: {[evt.target.name]: {$set: evt.target.value}}
        });

        this.setState(newState)
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        var inputs = this.getAllInputs();

        if (!this.state.isSubmitted) {
            this.setState({isSubmitted: true});
            if (!isFormValid(inputs)) {
                return;
            } else {
                this.submitAction()
            }
        } else if (!this.state.isFirstNameValid || !this.state.isLastNameValid || !this.state.isEmailValid || !this.state.isPhoneValid) {
            return;
        } else {
            this.submitAction();
        }
    };

    submitAction = () => {

        if (this.props.buttonAction === 'DELETE') {
            deleteContact(this.state.contact)
        } else if (this.props.buttonAction === 'EDIT') {
            editContact(this.state.contact)
        } else {
            addContact(this.state.contact)
        }

        this.cleanUp()
    };

    cleanUp = () => {
        var action = document.getElementsByClassName('submit-btn')[0].innerText;
        if (action === 'EDIT' || action === 'DELETE') {
            this.props.reloadContactList();
        } else if (action === 'SAVE') {
            this.resetForm();
            this.notification.prepareNotification(action);
        }

        this.deleteClass();
    };

    deleteClass = () => {
        var inputs = this.getAllInputs();
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].parentElement.classList.remove('success');
        }
    };

    resetForm = () => {
        this.setState(this.init())
    };

    getAllInputs = () => {
        var form = document.getElementById('contactForm');
        return form.getElementsByTagName('input');
    };

    render = () => {
        return (
            <div>
                <Notification ref={notification => this.notification = notification}/>
                <ContactForm initContact={this.state.contact} changeHandler={this.onChangeHandler}
                             submitHandler={this.onSubmitHandler}
                             btnValue={this.props.buttonAction || 'SAVE'}/>
            </div>
        )
    }
}

Contact.PropTypes = {
    buttonAction : PropTypes.oneOf(['EDIT','DELETE']),
    reloadContactList : PropTypes.func,
    initInputValue : PropTypes.object
};

export default Contact;