import React from 'react';

const Header = ({ logo, location, cartCount, categories, onSearch }) => {
  return (
    <header className="bg-[#131921]">
      <nav className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Amazon Logo" className="w-28 h-10" />
        </a>

        <div className="flex items-center text-white text-xs hidden lg:flex">
          <p className="mr-1">Deliver to</p>
          <p className="font-bold">{location}</p>
        </div>

        <div className="hidden lg:flex flex-grow items-center justify-center space-x-2 mx-4">
          <select className="bg-[#E8E8E8] text-sm rounded-l-md p-2">
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full px-4 py-2 text-sm rounded-r-md"
            onChange={(e) => onSearch(e.target.value)}
          />

          <button className="bg-orange-500 text-white p-2 rounded-r-md">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="flex items-center text-white space-x-4">
          {/* Language Selector */}
          <div className="hidden lg:flex items-center border-l pl-4">
            <img src="/assets/us_flag.png" className="h-4 w-5" alt="Flag" />
            <select className="bg-transparent text-sm font-bold ml-2">
              <option>EN</option>
            </select>
          </div>

          <div className="hidden lg:flex flex-col items-center cursor-pointer">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>

          <div className="hidden lg:flex flex-col items-center cursor-pointer">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            <span className="font-bold">{cartCount}</span>
          </div>
        </div>
      </nav>

      <div className="lg:hidden flex flex-col items-center p-4">
        <div className="flex w-full space-x-2 mb-4">
          <select className="bg-[#E8E8E8] text-sm rounded-l-md p-2 w-1/3">
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="w-2/3 px-4 py-2 text-sm rounded-r-md"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center space-y-3 text-white">
          <div className="flex flex-col items-center">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            <span className="font-bold">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
