import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { BooksContext } from '../../contexts/BooksContext';
import { IdContext } from '../../contexts/idContext';


const BookForm = ({typeForm}) => {
	const {valueBooks, setValueBooks} = useContext(BooksContext)
	const {id: currentId , setId} = useContext(IdContext)
	const [author, setAuthor] = useState('')
	const [book, setBook] = useState('');
	//const [bookState, setBookState] = useState([])
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const id = nanoid(4)
		switch (typeForm) {
			case "Add Book":
				
				setValueBooks([...valueBooks, {author, book, id}])

				setAuthor('')
				setBook('')
				break;
			case "Edit Book":
				const editBook = valueBooks.filter(item => item.id === currentId)
				console.log('editBook', editBook);

				const currentBooks = valueBooks.filter(item => item.id !== currentId)
				setValueBooks([...currentBooks, {author, book, id}])
				setAuthor('')
				setBook('')


				break;
			default:
				break;
		}
		
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
