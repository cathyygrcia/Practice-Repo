import './App.css';

export default function App() {
  const username = 'Cathy';
  const defaultName = username || 'Stranger';
  console.log(defaultName);
}
