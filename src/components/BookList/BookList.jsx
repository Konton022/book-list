import React from 'react';
import { useState, useEffect, useContext} from 'react';
import { Row, 	Col, ListGroup, Button } from 'react-bootstrap';
import { BooksContext } from '../../contexts/BooksContext';
import BookModal from '../BookModal/BookModal';

 
const BookList = () => {
	const {valueBooks, setValueBooks} = useContext(BooksContext)
	const [openModal, setOpenModal] = useState(false)

	console.log('valueContext list page	', valueBooks);

	function handleEdit(id){
		setOpenModal(!openModal)
		console.log('id', id);
	}


	return (
		<>
		<ListGroup className="mt-3"variant="flush">
			{valueBooks.map(function (item, index){
				console.log('item', item);
			return (<ListGroup.Item key={index}>
					<Row>
						<Col sm={3}>{item.author}</Col>
						<Col sm={6}>{item.book}</Col>
						<Col sm={1}><Button variant="secondary" size="sm" onClick={()=> handleEdit(index)}>Edit</Button></Col>
						<Col sm={1}><Button variant="secondary" size="sm">Del</Button></Col>

					</Row>
			</ListGroup.Item>)} )}
		</ListGroup>
		<BookModal isOpen={openModal} handleHide={()=> setOpenModal(false)}/>
		</>	

	)
	
}

export default BookList;
