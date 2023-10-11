import './index.scss';

export function EditButton({ handleShow, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="2em"
      viewBox="0 0 24 24"
      className="button"
      onClick={() => handleShow()}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16v4m9.5-13.5l4 4"
      ></path>
    </svg>
  );
}
