export type Categories = string[];

export default function Drawer({ category }) {
  return (
    <>
      <div className="modal">
        <ul className="ul">
          {category.map((n, index) => (
            <li key={index} className="list">
              {n}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
