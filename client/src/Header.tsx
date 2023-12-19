import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
export default function Header() {
  const people = {
    friends: {
      name: 'Cathy',
      age: 27,
      career: 'Software Engineer',
    },
    'other-friends': {
      name: 'Anna',
      age: 28,
      career: 'Pilates',
    },
  };

  function loops(obj, key) {
    console.log(obj[key]);
  }

  loops(people, ['friends']);

  return (
    <>
      <div className="header">
        <div className="column-third">
          <GiHamburgerMenu className="menu" />
        </div>
        <div className="column-third">
          <h2 className="header-title">Cathy's Coding Space</h2>
        </div>
        <div className="column-third heart-icon">
          <FaRegHeart />
        </div>
      </div>
    </>
  );
}
