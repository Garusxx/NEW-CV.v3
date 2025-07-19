import "../style/filmBars.css";

const FilmBars = ({ className }) => {
  return (
    <>
      <div className={`film-bar top ${className}`}>
        <div className="black-bar"></div>
        <div className="film-bar-animation"></div>
        <div className="black-bar-last"></div>
      </div>
      <div className={`film-bar bottom ${className}`}>
        <div className="black-bar-last"></div>
        <div className="film-bar-animation"></div>
        <div className="black-bar"></div>
      </div>
    </>
  );
};

export default FilmBars;
