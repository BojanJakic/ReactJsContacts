import React, {Component} from 'react';
//import Notification from './Notification'
//import {addContact, editContact, deleteContact} from '../js/contactCRUD.js'
//import {isFirstNameValid, isLastNameValid, isEmailValid, isFormValid, isPhoneValid} from '../js/customValidator.js'
//import update from 'immutability-helper';
import '../style/ContactForm.css';

class ContactForm extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contact: {
    //             id: "",
    //             firstName: "",
    //             lastName: "",
    //             email: "",
    //             phone: ""
    //         },
    //         isFirstNameValid: false,
    //         isLastNameValid: false,
    //         isEmailValid: false,
    //         isPhoneValid: false,
    //         isSubmitted: false,
    //     };
    // }
    //
    // componentWillReceiveProps() {
    //     if (this.props.initInputValue !== undefined) {
    //         this.setState({contact: this.props.initInputValue})
    //     }
    //
    //     if (this.props.buttonAction === 'DELETE') {
    //         var inputs = this.getAllInputs();
    //
    //         for (var i = 0; i < inputs.length; i++) {
    //             inputs[i].setAttribute('readonly', 'readonly');
    //         }
    //     }
    // }
    //
    // onChangeHandler = (evt) => {
    //     var inputField = evt.target.name;
    //     switch (inputField) {
    //         case  'firstName' :
    //             this.firstNameHandler(evt);
    //             break;
    //         case 'lastName' :
    //             this.lastNameHandler(evt);
    //             break;
    //         case 'email' :
    //             this.emailHandle(evt);
    //             break;
    //         case 'phone' :
    //             this.phoneHandler(evt);
    //             break;
    //         default :
    //             alert("error")
    //     }
    // }
    //
    // firstNameHandler = (evt) => {
    //     this.mergeNewStateValue(evt);
    //     var isValid = isFirstNameValid(evt.target);
    //     this.setState({isFirstNameValid: isValid})
    // };
    //
    // lastNameHandler = (evt) => {
    //     this.mergeNewStateValue(evt);
    //     var isValid = isLastNameValid(evt.target);
    //     this.setState({isLastNameValid: isValid})
    // };
    //
    // emailHandler = (evt) => {
    //     this.mergeNewStateValue(evt);
    //     var isValid = isEmailValid(evt.target);
    //     this.setState({isEmailValid: isValid})
    // };
    //
    // phoneHandler = (evt) => {
    //     this.mergeNewStateValue(evt);
    //     var isValid = isPhoneValid(evt.target);
    //     this.setState({isPhoneValid: isValid});
    // };
    //
    // mergeNewStateValue = (evt) => {
    //     var newState = update(this.state, {
    //         contact: {[evt.target.name]: {$set: evt.target.value}}
    //     });
    //
    //     this.setState(newState)
    // };
    //
    // onSubmitHandler = (evt) => {
    //     evt.preventDefault();
    //     var inputs = this.getAllInputs();
    //
    //     if (!this.state.isSubmitted) {
    //         this.setState({isSubmitted: true});
    //         if (!isFormValid(inputs)) {
    //             return;
    //         } else {
    //             this.submitAction()
    //         }
    //     } else if (!this.state.isFirstNameValid || !this.state.isLastNameValid || !this.state.isEmailValid || !this.state.isPhoneValid) {
    //         return;
    //     } else {
    //         this.submitAction();
    //     }
    // };
    //
    // submitAction = () => {
    //
    //     if (this.props.buttonAction === 'DELETE') {
    //         deleteContact(this.state.contact)
    //     } else if (this.props.buttonAction === 'EDIT') {
    //         editContact(this.state.contact)
    //     } else {
    //         addContact(this.state.contact)
    //     }
    //
    //     this.cleanUp()
    // };
    //
    // cleanUp = () => {
    //     var action = document.getElementsByClassName('submit-btn')[0].innerText;
    //     if (action === 'EDIT' || action === 'DELETE') {
    //         this.props.reloadContactList();
    //     } else if (action === 'SAVE') {
    //         this.resetForm();
    //         this.notification.prepareNotification(action);
    //     }
    //
    //     this.deleteClass();
    // };
    //
    // deleteClass = () => {
    //     var inputs = this.getAllInputs();
    //     for (var i = 0; i < inputs.length; i++) {
    //         inputs[i].parentElement.classList.remove('success');
    //     }
    // };
    //
    // resetForm = () => {
    //     this.setState({
    //         contact: {
    //             id: "",
    //             firstName: "",
    //             lastName: "",
    //             email: "",
    //             phone: ""
    //         },
    //         isFirstNameValid: false,
    //         isLastNameValid: false,
    //         isEmailValid: false,
    //         isPhoneValid: false,
    //         isSubmitted: false,
    //     })
    // };
    //
    // getAllInputs = () => {
    //     var form = document.getElementById('contactForm');
    //     return form.getElementsByTagName('input');
    // };


    render = () => {
        return (
            <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
                <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6">
                    <div className="form-header">Contact Form</div>
                    <form id="contactForm" onSubmit={(evt) => this.props.submitHandler(evt)} autoComplete="off">
                        <div className="form-group">
                            <label>First Name :</label>
                            <div className='input-group'>
                                <div className="input-group-addon">
                                    <span className="fa fa-user-circle-o"></span>
                                </div>
                                <input value={this.props.initContact.firstName} className="form-control"
                                       type="text"
                                       name="firstName" onChange={(evt) => this.props.changeHandler(evt)}/>
                            </div>
                            <span className="error-message" id="firstName"></span>
                        </div>
                        <div className="form-group">
                            <label>Last Name :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-user-circle-o"></span>
                                </div>
                                <input value={this.props.initContact.lastName} className="form-control" type="text"
                                       name="lastName" onChange={(evt) => this.props.changeHandler(evt)}/>
                            </div>
                            <span className="error-message" id="lastName"></span>
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-envelope-o"></span>
                                </div>
                                <input value={this.props.initContact.email} className="form-control" type="text"
                                       name="email" onChange={(evt) => this.props.changeHandler(evt)}/>
                            </div>
                            <span className="error-message" id="email"></span>
                        </div>
                        <div className="form-group">
                            <label>Phone :</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="fa fa-phone-square"></span>
                                </div>
                                <input value={this.props.initContact.phone} className="form-control" type="text"
                                       name="phone" onChange={(evt) => this.props.changeHandler(evt)}/>
                            </div>
                            <span className="error-message" id="phone"></span>
                        </div>

                        <div className="form-group">
                            <button type="submit"
                                    className="btn btn-primary btn-responsive submit-btn">{this.props.btnValue}</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
            </div>

        )
    }
}

export default ContactForm;
