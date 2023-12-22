import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Concerts from './Concerts';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />}>
          <Route index path="Concerts" element={<Concerts />} />
        </Route>
      </Routes>
    </>
  );
}
