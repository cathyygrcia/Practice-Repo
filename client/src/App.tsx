import './App.css';

export default function App() {
  const groceryList = ['apples', 'bananas', 'pasta', 'coconut'];
  groceryList.unshift('cake', 'brownies');
  console.log(groceryList);
}
