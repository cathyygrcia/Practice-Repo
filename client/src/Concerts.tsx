export default function Concerts({ isOpen }) {
  return (
    <>{isOpen ? <h1 className="white">This is my Concerts page</h1> : ''}</>
  );
}
