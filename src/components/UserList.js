import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Rutausers');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/Rutausers/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>Lista de Usuarios</h2>
      <Link to="/create" className="btn btn-primary mb-3">Crear Usuario</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Número de Teléfono</th>
            <th>NIT</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <td>{user.nit}</td>
              <td>
                <Link to={`/edit/${user._id}`} className="btn btn-warning me-2">Editar</Link>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserList;
