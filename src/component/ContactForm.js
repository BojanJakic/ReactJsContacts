import React, {Component} from 'react';
import Notification from './Notification'
import {addContact, editContact, deleteContact} from '../js/contactCRUD.js'
import {isFirstNameValid, isLastNameValid, isEmailValid, isFormValid, isPhoneValid} from '../js/customValidator.js'
import '../style/ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPhoneValid: false,
            isSubmitted: false,
        };
    }

    componentWillReceiveProps() {
        if (this.props.initInputValue !== undefined) {
            this.setState({
                id: this.props.initInputValue.id,
                firstName: this.props.initInputValue.firstName,
                lastName: this.props.initInputValue.lastName,
                email: this.props.initInputValue.email,
                phone: this.props.initInputValue.phone,
            })
        }

        if(this.props.buttonAction === 'DELETE'){
            var inputs = this.getAllInputs();

            for(var i = 0; i < inputs.length; i++){
                inputs[i].setAttribute('readonly', 'readonly');
            }
        }
    }

    onChangeFirstNameHandler = (evt) => {
        console.log(evt.target.value)
        this.setState({firstName: evt.target.value});
        var isValid = isFirstNameValid(evt.target);
        this.setState({isFirstNameValid : isValid})
    };

    onChangeLastNameHandler = (evt) => {
        this.setState({lastName: evt.target.value});
        var isValid = isLastNameValid(evt.target);
        this.setState({isLastNameValid : isValid})
    };

    onChangeEmailHandler = (evt) => {
        this.setState({email: evt.target.value});
        var isValid = isEmailValid(evt.target);
        this.setState({isEmailValid : isValid})
    };

    onChangePhoneHandler = (evt) => {
        this.setState({phone : evt.target.value});
        var isValid = isPhoneValid(evt.target);
        this.setState({isPhoneValid : isValid});
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
        var contact = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        };

        if (this.props.buttonAction === 'DELETE') {
            deleteContact(contact)
        } else if (this.props.buttonAction === 'EDIT') {
            editContact(contact)
        } else {
            addContact(contact)
        }

        this.cleanUp()
    };

    cleanUp = () => {
        var action = document.getElementsByClassName('submit-btn')[0].innerText;

        if (action === 'EDIT' || action === 'DELETE') {
            this.props.closeModal();
            this.props.reloadAfterClick();
        }else if(action === 'SAVE'){
            this.resetForm();
            this.notification.prepareNotification(action);
        }

        this.deleteClass();
    };

    deleteClass = () => {
        var inputs = this.getAllInputs();
        for(var i =0; i < inputs.length; i++){
            inputs[i].parentElement.classList.remove('success');
        }
    };

    resetForm = () => {
        this.setState({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPhoneValid: false,
            isSubmitted: false,
        })
    };

    getAllInputs = () => {
        var form = document.getElementById('contactForm');
        return form.getElementsByTagName('input');
    };

    render = () => {
        var buttonTitle = this.props.buttonAction || 'SAVE';

        return (
            <div>
                <Notification ref={notification => this.notification = notification}/>
                <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
                <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6">
                    <div className="form-header">Contact Form</div>
                    <form id="contactForm" onSubmit={(evt) => this.onSubmitHandler(evt)} autoComplete="off">
                        <div className="form-group">
                            <label>First Name :</label>
                            <div className='input-group'>
                                <div className="input-group-addon">
                                    <span className="fa fa-user-circle-o"></span>
                                </div>
                                <input id="a" value={this.state.firstName} className="form-control" type="text"
                                       name="firstName" onChange={(evt) => this.onChangeFirstNameHandler(evt)}/>
                            </div>
                            <span className="error-message" id="firstName"></span>
                        </div>
                        <div className="form-group">
                            <label>Last Name :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-user-circle-o"></span>
                                </div>
                                <input value={this.state.lastName} className="form-control" type="text"
                                       name="lastName" onChange={(evt) => this.onChangeLastNameHandler(evt)}/>
                            </div>
                            <span className="error-message" id="lastName"></span>
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-envelope-o"></span>
                                </div>
                                <input value={this.state.email} className="form-control" type="text"
                                       name="email" onChange={(evt) => this.onChangeEmailHandler(evt)}/>
                            </div>
                            <span className="error-message" id="email"></span>
                        </div>
                        <div className="form-group">
                            <label>Phone :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-phone-square"></span>
                                </div>
                                <input value={this.state.phone} className="form-control" type="text"
                                       name="phone" onChange={(evt) => this.onChangePhoneHandler(evt)}/>
                            </div>
                            <span className="error-message" id="phone"></span>
                        </div>

                        <div className="form-group">
                            <button type="submit"
                                    className="btn btn-primary btn-responsive submit-btn">{buttonTitle}</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
            </div>
            </div>
        )
    }
}

export default ContactForm;
