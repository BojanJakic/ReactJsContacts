import React from 'react';
import '../style/ContactOverview.css'

const ContactOverview = (props) => {

    return (
        <div>
            <div className="contact-header">Contact No {props.iteration + 1}</div>
            <p><strong>First Name :</strong> {props.currentContact.firstName}</p>
            <p><strong>Last Name : </strong>{props.currentContact.lastName}</p>
            <p><strong>Email : </strong> {props.currentContact.email}</p>
            <p><strong>Phone : </strong>{props.currentContact.phone}</p>
        </div>
    )
};

export default ContactOverview;
