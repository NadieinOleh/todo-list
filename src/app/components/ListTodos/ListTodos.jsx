import { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';

import { checkedTodo } from '../../redux/features/todosSlice';
import ModalEdit from '../ModalEdit/ModalEdit';
import { RemoveButton } from '../RemoveButton/RemoveButton';

import './index.scss';

function ListTodos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();

  const handleChecked = (id) => {
    dispatch(checkedTodo(id));
  };

  const filterTodo = useCallback(() => {
    switch (selected) {
    case 'All':
      return todos;

    case 'Active':
      return todos.filter((todo) => !todo.checked);

    case 'Completed':
      return todos.filter((todo) => todo.checked);

    default:
      return todos;
    }
  }, [selected, todos]);

  const visibleTodos = filterTodo();

  const handleChange = (e) => {
    const { value } = e.target;

    setSelected(value);
  };

  return (
    <>
      <Form.Select
        className="select"
        aria-label="Default select example"
        value={selected}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
      </Form.Select>

      {!visibleTodos.length ? (
        <span className="text-warning">{`Not ${selected} todos`}</span>
      ) : (
        <ListGroup as="ul">
          {visibleTodos.map(({ title, description, id, checked }) => (
            <ListGroup.Item
              className={checked ? 'checked' : ''}
              key={id}
              as="li"
            >
              <span>
                <span>Title: {title}</span>
                <br />
                <span>Description: {description}</span>
              </span>

              <span className="groupButtons">
                <input
                  type="checkbox"
                  onChange={() => handleChecked(id)}
                  checked={checked}
                />
                
                <RemoveButton id={id} />

                <ModalEdit title={title} description={description} id={id} />
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default ListTodos;
