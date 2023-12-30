export default function Homepage() {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-box">
          <div className="images-container">
            <div className="image-wrapper">
              <img
                src="/images/cathyg.png"
                alt="Cathy"
                className="homepage-images"
              />
            </div>
            <div className="image-wrapper">
              <img src="/images/cathy.jpg" className="homepage-images" />
            </div>
            <div className="image-wrapper">
              <img src="/images/cathyg2.png" className="homepage-images" />
            </div>
          </div>
          <p className="homepage-text">
            Welcome to Cathy's Coding Space! This is a place I created to keep
            up with my coding skills that I have gained over the past few
            months. Everthing displayed on this website was designed
            specifically for me to practice certain skills and technologies.
            Coding has become a way for me to escape reality and have an
            artistic outlet. One of the best and hardest decisions of my life
            was to quit my full time job to enroll in a coding bootcamp.
            Although it was one of the hardest things I have ever done, I am
            truly grateful to have had that experience. Coding has changed my
            life for the better and I am excited to embark on this new journey
            as a software engineer. Throughout this website I have created
            different pages displaying some of my hobbies and interests. Take a
            look around to discover more about me!
          </p>
        </div>
      </div>
    </>
  );
}
