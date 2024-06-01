import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
      <Container className="mt-4">
        <Routes>
          <Route path="/create" element={<CreateUser />} />
          <Route path="/" element={<UserList />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
