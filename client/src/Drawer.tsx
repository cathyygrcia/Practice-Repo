import { Link, Outlet } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

export type Categories = string[];

export default function Drawer({ category, onHandleClick }) {
  return (
    <>
      <div className="modal">
        <div className="exit">
          <IoMdClose className="exit-styles" onClick={onHandleClick} />
        </div>
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
