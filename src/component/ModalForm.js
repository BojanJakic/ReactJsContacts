import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {Modal,Button} from 'react-bootstrap';


class ModalForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            index : 0
        }
    }

    openModal = (index) => {
        this.setState({showModal:true,index : index })
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    render = () => {

        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ContactForm closeModal={() => this.closeModal()} initInputValue={this.props.init[this.state.index]}
                                     buttonAction={this.props.buttonAction} reloadAfterClick={this.props.reloadAfterClick}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.closeModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

export default ModalForm;