import myimage from "../public/r.jpg";
function Hero1() {
  return (
    <div className="">
      <div
        className="h hero min-h-screen w-11/12  mx-auto sm:mx-auto  "
        style={{
          backgroundImage: `url(${myimage})`,
        }}
      >
        <div className="h hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Empower Your Nutrition Journey with Simple, Practical Tools!
            </h1>
            {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
