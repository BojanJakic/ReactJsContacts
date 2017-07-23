import React, {Component} from 'react';
import Contact from './Contact';
import {Modal, Button} from 'react-bootstrap';


class ModalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            index: 0
        }
    }

    openModal = () => {

        this.setState({showModal: true});
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    componentDidMount = () => {
        this.openModal();
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.shouldCloseModal) {

            this.closeModal();
            return;
        }
        this.openModal();
    };

    render = () => {

        return (
            <div>
                <Modal show={this.state.showModal}>
                    <Modal.Body>
                        <Contact initInputValue={this.props.init[this.props.index]} buttonAction={this.props.buttonAction}
                                 reloadContactList={this.props.reloadContactList}/>
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