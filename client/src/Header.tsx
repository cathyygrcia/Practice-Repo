import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';

import Drawer, { Categories } from './Drawer';

const categories: Categories = ['Concerts', 'Running', 'Friends', 'Gallery'];

export default function Header({ isOpen, handleClick }) {
  return (
    <>
      <div className="header">
        <div className="column-third">
          <GiHamburgerMenu className="menu" onClick={handleClick} />
        </div>
        <div className="column-third">
          <h2 className="header-title">Cathy's Coding Space</h2>
        </div>
        <div className="column-third heart-icon">
          <FaRegHeart />
        </div>
      </div>
      {isOpen && <Drawer category={categories} onHandleClick={handleClick} />}
    </>
  );
}
