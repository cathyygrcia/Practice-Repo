import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Concerts from './Concerts';
import Running from './Running';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />}>
          <Route path="Concerts" element={<Concerts />} />
          <Route path="Running" element={<Running />} />
        </Route>
      </Routes>
    </>
  );
}
