const Background = ({ video, className, poster }) => {
  return (
    <div>
      <video
        key={video}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className={`bg-video ${className}`}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
