import { Link, Outlet } from 'react-router-dom';

export type Categories = string[];

export default function Drawer({ category, onHandleClick }) {
  return (
    <>
      <div className="modal">
        <ul className="ul">
          {category.map((i, index) => (
            <li key={index} className="list">
              <Link to={`/${i}`} onClick={onHandleClick}>
                {i}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
}
