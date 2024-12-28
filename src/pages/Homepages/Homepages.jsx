import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Homepages.css'; // Import the CSS file
import Button from 'react-bootstrap/Button';

export default function Homepages() {
  const [todos,] = useState([
    { todo_date: "2024/12/12", todo_text: "Study React", isCompleted: false },
    { todo_date: "2024/10/12", todo_text: "Study HTML", isCompleted: true },
    { todo_date: "2024/01/01", todo_text: "Data Structure", isCompleted: true },
  ]);

  
  return (
    <>
      <h1>Home Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.todo_date}</td>
              <td>{todo.todo_text}</td>
              <td>{todo.isCompleted ? 'Yes' : 'No'}</td>
              <td><Button variant="danger">Danger</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
