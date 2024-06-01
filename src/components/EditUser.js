import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [nit, setNit] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Rutausers/${id}`);
        setName(response.data.name);
        setAge(response.data.age);
        setPhone(response.data.phone);
        setNit(response.data.nit);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/Rutausers/${id}`, { name, age, phone, nit });
      alert('Usuario actualizado exitosamente!');
      navigate('/');
    } catch (err) {
      console.error('Hubo un error al actualizar el usuario!', err);
      alert('Hubo un error al actualizar el usuario!');
    }
  };

  return (
    <Container>
      <h2>Editar Usuario</h2>
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
        <Button variant="primary" type="submit">Actualizar</Button>
      </Form>
    </Container>
  );
}

export default EditUser;
