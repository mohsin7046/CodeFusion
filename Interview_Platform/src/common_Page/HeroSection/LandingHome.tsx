import LottieAnimation from '../../User_Section/utility/AnimationHelper';

function LandingHome() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Unleash the Power of{' '}
              <span className="text-blue-600">Productive meetings</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Built for Teams, Perfected for Coders.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                Get Started
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50">
                Sign up with Google
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <LottieAnimation
              width={400}
              height={400}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHome;
