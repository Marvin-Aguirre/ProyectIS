import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

function CreateUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [nit, setNit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/Rutausers', { name, age, phone, nit });
      console.log(response.data);
      alert('Usuario creado exitosamente!');
    } catch (err) {
      console.error('Hubo un error al crear el usuario!', err);
      alert('Hubo un error al crear el usuario!');
    }
  };

  return (
    <Container>
      <h2>Crear Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Edad" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Número de Teléfono</Form.Label>
          <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Número de Teléfono" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>NIT</Form.Label>
          <Form.Control type="text" value={nit} onChange={(e) => setNit(e.target.value)} placeholder="NIT" />
        </Form.Group>
        <Button variant="primary" type="submit">Crear</Button>
      </Form>
    </Container>
  );
}

export default CreateUser;
