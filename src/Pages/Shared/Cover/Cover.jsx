

const Cover = ({img,coverTitle,coverDescription}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase"> {coverTitle} </h1>
          <p className="mb-5">
           {coverDescription}
          </p>
          <button className="btn px-6 py-3 bg-[#80f221] text-black rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
