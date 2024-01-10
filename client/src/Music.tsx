import { useEffect, useState } from 'react';

const carouselImages1 = [
  '/images/TheSkints.jpeg',
  '/images/LilaIke.jpeg',
  '/images/Interrupters.jpeg',
];
const carouselImages2 = [
  '/images/TribalSeeds.jpeg',
  '/images/Protoje.jpeg',
  '/images/TheSpecials.jpeg',
];

const artistNames = [
  'Tribal Seeds',
  'The Skints',
  'Lila Ike',
  'Protoje',
  'The Interrupters',
  'The Specials',
  'Iya Terra',
  'Hirie',
  'The Expanders',
  'Fortunate Youth',
];

const spotify = [
  'https://open.spotify.com/artist/7jgZFR40bWjwOrRCOZFB02?autoplay=true',
  'https://open.spotify.com/artist/39k4UDTgsWe6NCi6hgnfc1?autoplay=true',
  'https://open.spotify.com/artist/0uAUrmEQbwcDFzg0v7VicO?autoplay=true',
  'https://open.spotify.com/artist/7BGR8y1VZAWK2oR4zD9COr?autoplay=true',
  'https://open.spotify.com/artist/25Maank76ry2Tmbi2Ql1SF?autoplay=true',
  'https://open.spotify.com/artist/6xnvNmSzmeOE1bLKnYXKW3?autoplay=true',
  'https://open.spotify.com/artist/1uXHYeD8JQjkaIGvEARs4D?autoplay=true',
  'https://open.spotify.com/artist/0HYbyzzhI44iTHvYnf1nOs?autoplay=true',
  'https://open.spotify.com/artist/6TofIIqBhodHJAZU6vh9sT?autoplay=true',
  'https://open.spotify.com/artist/53eTH57OzNJCKOohjcWMoB?autoplay=true',
];

export default function Music() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  function handleCarousel1() {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % carouselImages1.length);
  }

  function handleCarousel2() {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % carouselImages2.length);
  }

  useEffect(() => {
    const timeoutId1 = setTimeout(handleCarousel1, 2000);

    return () => clearTimeout(timeoutId1);
  }, [currentIndex1]);

  useEffect(() => {
    const timeoutId2 = setTimeout(handleCarousel2, 2000);

    return () => clearTimeout(timeoutId2);
  }, [currentIndex2]);

  return (
    <>
      <div className="artist-container">
        {artistNames.map((name, s) => (
          <a className="artist-names" href={spotify[s]} target="_blank">
            {name}
          </a>
        ))}
      </div>
      <div className="carousel-row">
        <div className="carousel-container">
          <div className="carousel-third">
            <img
              src={carouselImages1[currentIndex1]}
              className="carousel-images"
              alt={`music-${currentIndex1}`}
            />
          </div>
          <div className="carousel-third">
            <img
              src={carouselImages2[currentIndex2]}
              className="carousel-images"
              alt={`music-${currentIndex2}`}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column-fourth">
          <div className="boxes white">
            <img src="/images/IyaTerra.jpeg" className="music-image" />
          </div>
        </div>
        <div className="column-fourth">
          <div className="boxes white">
            <img src="/images/Hirie.jpeg" className="music-image" />
          </div>
        </div>
        <div className="column-fourth">
          <div className="boxes white">
            <img src="/images/TheExpanders.jpeg" className="music-image" />
          </div>
        </div>
        <div className="column-fourth">
          <div className="boxes white">
            <img src="/images/FortunateYouth.jpeg" className="music-image" />
          </div>
        </div>
      </div>
    </>
  );
}
