export default function Header() {
  function loops() {
    const people = {
      friends: {
        name: 'Cathy',
        age: 27,
        career: 'Software Engineer',
      },
      'other-friends': {
        name: 'Anna',
        age: 28,
        career: 'Pilates',
      },
    };

    for (const key in people) {
      console.log(people[key].career);
    }
  }
  loops();
  return (
    <>
      <div className="header">
        <h2 className="header-title">Cathy's Practice Space</h2>
      </div>
    </>
  );
}
