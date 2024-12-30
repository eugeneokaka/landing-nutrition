import myimage from "../public/h.jpg";
function Hero() {
  return (
    <div className="lg:w-8/12 mx-auto">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={myimage}
            className="max-w-sm rounded-lg shadow-2xl aspect-square object-cover "
          />
          <div>
            <h1 className="text-5xl font-bold ">Welcome To Oasis Nutrition</h1>
            <p className="py-6">
              At Oasis Nutrition, we provide personalized nutrition plans
              tailored to your needs.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
