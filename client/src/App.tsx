import './App.css';

export default function App() {
  console.log(practice('cAthY'));
}

function practice(string) {
  const firstChar = string[0].toUpperCase();
  const restOfWord = string.slice(1).toLowerCase();
  return firstChar + restOfWord;
}
