import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';

import { editTodo } from '../../redux/features/todosSlice';
import { EditButton } from '../EditButton/EditButton';

import './index.scss';

function ModalEdit({ title, description, id }) {
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const dispatch = useDispatch();

  const handleClose = () => {
    if (!editTitle || !editDescription) {
      setEditDescription(description);
      setEditTitle(title);
      setShow(false);

      return;
    }

    const editMessages = {
      title: editTitle,
      description: editDescription,
      id,
    };

    dispatch(editTodo(editMessages));
    setShow(false);
  };

  const handleCloseCross = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setEditTitle(value);
    }

    if (name === 'description') {
      setEditDescription(value);
    }
  };

  return (
    <>
      <EditButton handleShow={handleShow} />

      <Modal className="modal-edit" show={show} onHide={handleCloseCross}>
        <Modal.Header className="modal-edit__header" closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-edit__body">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>

            <Form.Control
              name="title"
              aria-label="Title"
              aria-describedby="inputGroup-sizing-default"
              value={editTitle}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Description
            </InputGroup.Text>

            <Form.Control
              name="description"
              aria-label="Description"
              aria-describedby="inputGroup-sizing-default"
              value={editDescription}
              onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer className="modal-edit__footer">
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

export default ModalEdit;
