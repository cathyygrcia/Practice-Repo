const categories = ['Concerts', 'Running', 'Friends', 'Gallery'];

export default function Drawer() {
  return (
    <>
      <div className="modal">
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="list">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
