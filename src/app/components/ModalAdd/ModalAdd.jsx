import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';

import { addTodos } from '../../redux/features/todosSlice';

import './index.scss';

function ModalWindow() {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    id: 0,
    checked: false,
  });
  const dispatch = useDispatch();

  const handleClose = () => {
    if (!todo.title || !todo.description) {
      setShow(false);

      return;
    }

    dispatch(addTodos(todo));
    setShow(false);
  };

  const handleCloseCross = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title' || name === 'description') {
      setTodo((todo) => ({
        ...todo,
        [name]: value,
      }));
    }

    if (name === 'title') {
      setTodo((todo) => ({
        ...todo,
        id: todo.id + 1,
      }));
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Todo
      </Button>

      <Modal className="modal" show={show} onHide={handleCloseCross}>
        <Modal.Header className="modal__header" closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal__body">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-Title">
              Title
            </InputGroup.Text>

            <Form.Control
              name="title"
              aria-label="Title"
              aria-describedby="inputGroup-sizing-Title"
              onChange={handleChange}
            />
          </InputGroup>
    
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-Description">
              Description
            </InputGroup.Text>
            <Form.Control
              name="description"
              aria-label="Description"
              aria-describedby="inputGroup-sizing-Description"
              onChange={handleChange}
            />
          </InputGroup>

        </Modal.Body>

        <Modal.Footer className="modal__header">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
