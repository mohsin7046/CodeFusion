function AboutUs() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About us</h2>
            <p className="text-gray-600 mb-6">
              In order to have an epic meeting, you need five parts:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Set a cadence for your team meetings</li>
              <li>Have a clear meeting objective and agenda</li>
              <li>Start on time and end on time</li>
              <li>Have the right attendees in the room</li>
              <li>
                Have clear action items (who, what, when) at the end of the
                meeting
              </li>
            </ul>
            <p className="text-gray-600">
              With the integrated code editor, participants can collaborate on
              coding tasks during meetings.{' '}
              <span className="font-semibold">Rate It</span> is designed to help
              leaders and managers run productive meetings on this platform by
              gathering timely feedback to ensure meetings are efficient and
              engaging. This feature will help you organize world-class,
              super-effective meetings while fostering collaborative coding.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg inline-block">
                <div className="bg-blue-500 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.98 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.89a1 1 0 00-1.176 0l-3.98 2.89c-.784.57-1.839-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.101c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Rate it</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
