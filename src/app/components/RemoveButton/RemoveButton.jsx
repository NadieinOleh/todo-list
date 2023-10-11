import { useDispatch } from 'react-redux';

import { removeTodos } from '../../redux/features/todosSlice';

import './index.scss';

export function RemoveButton(props) {
  const dispatch = useDispatch();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="2em"
      viewBox="0 0 24 24"
      className="button"
      onClick={() => dispatch(removeTodos(props.id))}
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          // eslint-disable-next-line max-len
          d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6h16zm-6-4a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2h4z"
        ></path>
      </g>
    </svg>
  );
}
