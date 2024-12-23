function HowItWorks() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          How it works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m0 4H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-3 0V3m0 4a2 2 0 012 2v10a2 2 0 01-2 2m0 0H8m0 0a2 2 0 01-2-2V9a2 2 0 012-2m0 0h8"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Click Google integration
            </h3>
            <p className="mt-2 text-gray-600">
              Simply log into your Google account, then seamlessly integrate and
              mirror your planned meetings.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21V10m4-6h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a2 2 0 01-2-2V4a2 2 0 012-2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Customization
            </h3>
            <p className="mt-2 text-gray-600">
              Whatever the goals of your team or organization, create a survey
              to better help you understand the minds of those involved.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21V10m4-6h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a2 2 0 01-2-2V4a2 2 0 012-2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Code Editor</h3>
            <p className="mt-2 text-gray-600">
              Automatically triggered emails collect feedback while you code.
              Manage meetings and track progress seamlessly in your dashboard
              with clean, organized data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
