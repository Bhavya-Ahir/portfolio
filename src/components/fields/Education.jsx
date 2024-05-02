import React from "react";

const Experience = () => {
  return (
    <div id="education" className="p-[50px] md:px-[100px] md:pt-[100px]">
      <h2
        id="education-title"
        className="font-bold uppercase pb-[40px] text-[#01e2c7]"
      >
        EDUCATION
      </h2>
      <div className="pl-[20px] md:pl-[50px]">
        <ol className="pl-[30px] relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span
              className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-black dark:ring-gray-900"
              style={{ backgroundColor: "#000000" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#01e2c7"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 text-white">
              North Carolina State University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2023 - December 2024
            </time>
            <p className="text-base italic font-normal text-gray-500 dark:text-gray-400">
              Master of Science in Computer Science | GPA: 4.0/4.0
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span
              className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-black dark:ring-gray-900"
              style={{ backgroundColor: "#000000" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#01e2c7"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.702 0 0112 13.489a50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 text-white">
              Sardar Patel Institute of Technology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2017 - May 2021
            </time>
            <p className="text-base italic font-normal text-gray-500 dark:text-gray-400">
              Bachelor of Technology, Computer Science | GPA: 3.7/4.0
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
