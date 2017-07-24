import React from 'react';
import PropTypes from 'prop-types'
import '../style/ContactForm.css';

const ContactForm = (props) => {

    return (
        <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
            <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6">
                <div className="form-header">Contact Form</div>
                <form id="contactForm" onSubmit={(evt) => props.submitHandler(evt)} autoComplete="off">
                    <div className="form-group">
                        <label>First Name :</label>
                        <div className='input-group'>
                            <div className="input-group-addon">
                                <span className="fa fa-user-circle-o"></span>
                            </div>
                            <input value={props.initContact.firstName} className="form-control"
                                   type="text"
                                   name="firstName" onChange={(evt) => props.changeHandler(evt)}/>
                        </div>
                        <span className="error-message" id="firstName"></span>
                    </div>
                    <div className="form-group">
                        <label>Last Name :</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="fa fa-user-circle-o"></span>
                            </div>
                            <input value={props.initContact.lastName} className="form-control" type="text"
                                   name="lastName" onChange={(evt) => props.changeHandler(evt)}/>
                        </div>
                        <span className="error-message" id="lastName"></span>
                    </div>
                    <div className="form-group">
                        <label>Email :</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="fa fa-envelope-o"></span>
                            </div>
                            <input value={props.initContact.email} className="form-control" type="text"
                                   name="email" onChange={(evt) => props.changeHandler(evt)}/>
                        </div>
                        <span className="error-message" id="email"></span>
                    </div>
                    <div className="form-group">
                        <label>Phone :</label>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="fa fa-phone-square"></span>
                            </div>
                            <input value={props.initContact.phone} className="form-control" type="text"
                                   name="phone" onChange={(evt) => props.changeHandler(evt)}/>
                        </div>
                        <span className="error-message" id="phone"></span>
                    </div>

                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary btn-responsive submit-btn">{props.btnValue}</button>
                    </div>
                </form>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-3 col-lg-3"></div>
        </div>

    )
};

ContactForm.propTypes = {
    initContact: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string
    }),
    submitHandler : PropTypes.func,
    changeHandler : PropTypes.func,
    btnValue : PropTypes.string,
};

export default ContactForm;
