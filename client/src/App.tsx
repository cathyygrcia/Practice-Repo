import './App.css';

type Person = {
  name: string;
  age: number;
  profession: string;
  car: string;
};

export default function App() {
  const person: Person = {
    name: 'Cathy',
    age: 27,
    profession: 'software engineer',
    car: 'Subaru',
  };

  console.log(person['name']);
}
