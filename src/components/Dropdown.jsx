import React from "react";

const Dropdown = () => {
  return (
    <div className="group relative text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          Options
        </button>
      </div>

      <div className="absolute hidden origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#1"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Option 1
          </a>
          <a
            href="#2"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Option 2
          </a>
          <a
            href="#3"
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Option 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
