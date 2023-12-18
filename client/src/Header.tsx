export default function Header() {
  function loops() {
    const spaceship = {
      crew: {
        captain: {
          name: 'Lily',
          degree: 'Computer Engineering',
          cheerTeam() {
            console.log('You got this!');
          },
        },
        'chief officer': {
          name: 'Dan',
          degree: 'Aerospace Engineering',
          agree() {
            console.log('I agree, captain!');
          },
        },
        medic: {
          name: 'Clementine',
          degree: 'Physics',
          announce() {
            console.log(`Jets on!`);
          },
        },
        translator: {
          name: 'Shauna',
          degree: 'Conservation Science',
          powerFuel() {
            console.log('The tank is full!');
          },
        },
      },
    };

    for (const crewMember in spaceship.crew) {
      console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
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
