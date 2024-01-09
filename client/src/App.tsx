import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Music from './Music';
import Running from './Running';
import { useState } from 'react';
import Homepage from './Homepage';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function onHandleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header isOpen={isOpen} handleClick={onHandleClick} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Music" element={<Music />} />
        <Route path="Running" element={<Running />} />
      </Routes>
    </>
  );
}
