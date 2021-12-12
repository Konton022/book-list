import React from 'react';
import { Modal } from 'react-bootstrap';
import BookForm from '../BookForm/BookForm';


const BookModal = ({isOpen, handleHide}) => {

	return (
	<Modal show={isOpen} onHide={handleHide}>
  		<Modal.Header closeButton>
    		<Modal.Title>Edit Book...</Modal.Title>
  		</Modal.Header>

  		<Modal.Body>
			<BookForm typeForm="Edit Book"/>
  		</Modal.Body>

 
	</Modal>
	);
}

export default BookModal;
