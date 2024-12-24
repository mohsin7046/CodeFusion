import React from 'react';

interface MeetingOption {
  icon: JSX.Element;
  label: string;
}

const meetings: MeetingOption[] = [
  {
    icon: (
      <div className="bg-blue-500 p-3 rounded-full">
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A2 2 0 0122 9.545v4.91a2 2 0 01-2.447 1.82L15 14M15 10v4M15 10L9 7.5M15 14l-6 2.5M9 7.5l-4.553 2.276A2 2 0 002 11.545v4.91a2 2 0 002.447 1.82L9 14m0-6.5v4m0-4L15 14"
          />
        </svg>
      </div>
    ),
    label: 'New Meeting',
  },
  {
    icon: (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    ),
    label: 'Join',
  },
  {
    icon: (
      <div className="bg-red-500 p-3 rounded-full">
        <svg
          className="w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 2.25v1.5m7.5-1.5v1.5M3.75 9h16.5M4.5 6.75h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 21H4.5a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25z"
          />
        </svg>
      </div>
    ),
    label: 'Schedule',
  },
];

const MeetingOptions: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-full w-full bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
          Meetings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:scale-105 transform transition"
            >
              {meeting.icon}
              <span className="text-sm font-medium text-gray-800">
                {meeting.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetingOptions;
