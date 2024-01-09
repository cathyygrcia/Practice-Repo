import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
export default function Music() {
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
          <img src="/images/Protoje.jpeg" className="test" />
        </div>
        <div className="carousel-third">
          <FaChevronRight className="right-arrow" />
        </div>
      </div>
    </>
  );
}
