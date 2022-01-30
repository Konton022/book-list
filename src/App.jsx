import React from 'react';
import BookList from './components/BookList/BookList';
import NaviBar from './components/NaviBar/NaviBar';
import BookForm from './components/BookForm/BookForm';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div className='App'>
            <NaviBar />
            <Container>
                <BookForm typeForm='Add Book' />
                <BookList />
            </Container>
        </div>
    );
}

export default App;
