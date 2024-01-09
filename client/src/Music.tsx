import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const carouselImages = ['/images/TheSkints.jpeg', '/images/LilaIke.jpeg'];

export default function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRightArrow() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }
  useEffect(() => {
    const timeoutId = setTimeout(handleRightArrow, 3000); // Adjust the delay as needed (in milliseconds)

    // Cleanup the timeout to avoid potential issues
    return () => clearTimeout(timeoutId);
  }, [currentIndex]); // Run this effect whenever currentIndex changes

  return (
    <>
      <div className="row">
        <div className="column-fourth">
          <div className="boxes white">
            <img src="/images/TribalSeeds.jpeg" className="music-image" />
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
            <img src="/images/Protoje.jpeg" className="music-image" />
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <div className="carousel-third">
          <FaChevronLeft className="left-arrow" />
        </div>
        <div className="carousel-third">
          <img
            src={carouselImages[currentIndex]}
            className="test"
            alt={`music-${currentIndex}`}
          />
        </div>
        <div className="carousel-third" onClick={handleRightArrow}>
          <FaChevronRight className="right-arrow" />
        </div>
      </div>
    </>
  );
}
