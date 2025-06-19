const Background = ({ video }) => {
  return (
    <div>
      <video key={video} autoPlay muted loop playsInline className="bg-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
