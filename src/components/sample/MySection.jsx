import React from 'react';

const MySection = () => {
  return (
    <div className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full max-lg:gap-4">
          {/* List of categories */}
          <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
            <li className="flex items-center cursor-pointer outline-none group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                  d="M19.7778 9.33333V9.33333C19.7778 8.09337 19.7778 7.47339 19.6415 6.96472C19.2716 5.58436 18.1934 4.50616 16.8131 4.1363C16.3044 4 15.6844 4 14.4444 4C12.963 4 11.4815 4 10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20C11.3333 20 12.6667 20 14 20C15.6554 20 16.4831 20 17.1459 19.7588C18.2569 19.3544 19.1322 18.4791 19.5365 17.3681C19.7778 16.7053 19.7778 15.8776 19.7778 14.2222V14.2222M16.6667 14.2222H20.2222C21.2041 14.2222 22 13.4263 22 12.4444V11.1111C22 10.1293 21.2041 9.33333 20.2222 9.33333H16.6667C15.6848 9.33333 14.8889 10.1293 14.8889 11.1111V12.4444C14.8889 13.4263 15.6848 14.2222 16.6667 14.2222Z"
                  stroke="#4F46E5"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">
                Finance
              </span>
              <button className="flex aspect-square h-6 rounded-full border border-indigo-600 items-center justify-center font-medium text-base text-indigo-600 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                8
              </button>
            </li>

            <li className="flex items-center cursor-pointer outline-none group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                  d="M10 14.2449C9.55209 14.2449 7.76925 14.2449 6 14.2449C4.11438 14.2449 3.17157 14.2449 2.58579 13.6591C2 13.0733 2 12.1305 2 10.2449V10.0816C2 8.19601 2 7.25321 2.58579 6.66742C3.17157 6.08163 4.11275 6.08163 5.99512 6.08163C9.46482 6.08163 14.4728 6.08163 18 6.08163C19.8856 6.08163 20.8284 6.08163 21.4142 6.66742C22 7.25321 22 8.19599 22 10.0816C22 10.136 22 10.1905 22 10.245C22 12.1306 22 13.0733 21.4142 13.6591C20.8284 14.2449 19.8856 14.2449 18 14.2449C16.2308 14.2449 14.4479 14.2449 14 14.2449M20.6667 17.2381C20.6667 17.3697 20.6667 17.6444 20.6667 17.9986C20.6667 19.8851 20.6667 20.8284 20.0809 21.4142C19.4951 22 18.5523 22 16.6667 22H7.33333C5.44772 22 4.50491 22 3.91912 21.4142C3.33333 20.8284 3.33333 19.8856 3.33333 18V17.2381M15.3333 6.08163V5.33333C15.3333 4.08718 15.3333 3.4641 15.0654 3C14.8898 2.69596 14.6374 2.44349 14.3333 2.26795C13.8692 2 13.2462 2 12 2V2C10.7538 2 10.1308 2 9.66667 2.26795C9.36263 2.44349 9.11015 2.69596 8.93462 3C8.66667 3.4641 8.66667 4.08718 8.66667 5.33333V6.08163M11.3333 16.966H12.6667C13.403 16.966 14 16.3569 14 15.6054V12.8844C14 12.1329 13.403 11.5238 12.6667 11.5238H11.3333C10.597 11.5238 10 12.1329 10 12.8844V15.6054C10 16.3569 10.597 16.966 11.3333 16.966Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">
                Management
              </span>
              <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                3
              </span>
            </li>
            {/* Add more items as needed */}
          </ul>

          {/* Dropdown */}
          <div className="relative w-full max-w-sm">
            <svg
              className="absolute top-1/2 -translate-y-1/2 left-4 z-50"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.90167 13.6552 8.04465 13.7797 8.21292 13.7797C8.22377 13.7797 8.23462 13.7796 8.24546 13.7794C8.55582 13.7739 8.83589 13.6073 9.01214 13.3504C9.11052 13.195 9.22634 12.9998 9.35801 12.7891C9.42656 12.6825 9.53033 12.5413 9.63662 12.3986L13.8407 6.33732C14.1573 6.00644 14.334 5.56616 14.334 5.10821C14.334 4.12802 13.538 3.33203 12.5561 3.33203H16.5555Z"
                fill="currentColor"
              />
            </svg>
            <select
              name="filter"
              className="w-full pl-12 text-base py-3 px-4 bg-transparent border rounded-lg border-gray-300 outline-none focus:border-indigo-600 transition-all appearance-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="finance">Finance</option>
              <option value="management">Management</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySection;
