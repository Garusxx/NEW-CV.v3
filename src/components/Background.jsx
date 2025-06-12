const Background = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video/AboutMe4k.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
