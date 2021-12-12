import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { BooksContext } from '../../contexts/BooksContext';


const BookForm = ({typeForm}) => {
	const {valueBooks, setValueBooks} = useContext(BooksContext)
	const [author, setAuthor] = useState('')
	const [book, setBook] = useState('');
	//const [bookState, setBookState] = useState([])
	
	const handleSubmit = (event) => {
		event.preventDefault()
		setValueBooks([...valueBooks, {author, book}])

		setAuthor('')
		setBook('')
	}

	useEffect(()=>{
		localStorage.setItem('books', JSON.stringify(valueBooks))
	},[valueBooks])

	return (
		<Form onSubmit = {handleSubmit}>
		<Row>
			<Col sm={5}>
				<FloatingLabel controlId="floatingInputGrid" label="Author">
      					<Form.Control type="input" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    			</FloatingLabel>
			</Col>
			<Col sm={7}>
				<FloatingLabel controlId="floatingInputGrid" label="Name of Book">
      					<Form.Control type="input"  value={book} onChange={(e)=>setBook(e.target.value)}/>
    			</FloatingLabel>
			</Col>
		</Row>
		<Col className="d-grid gap-2">
			<Button className="mt-3" type="submit" variant="secondary" >{typeForm}</Button>
		</Col>
		</Form>
	);
}

export default BookForm;
