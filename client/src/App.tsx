import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Concerts from './Concerts';
import Running from './Running';
import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function onHandleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<Header isOpen={isOpen} handleClick={onHandleClick} />}>
          <Route path="Concerts" element={<Concerts isOpen={isOpen} />} />
          <Route path="Running" element={<Running />} />
        </Route>
      </Routes>
    </>
  );
}
