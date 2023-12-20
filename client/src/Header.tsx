import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import Drawer from './Drawer';

export default function Header() {
  const [open, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!open);
  }

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
      {open && <Drawer />}
    </>
  );
}
