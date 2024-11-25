import React from 'react';

const Header = ({ logo, location, cartCount, categories, onSearch }) => {
  return (
    <header>
      <nav className="bg-[#0F1111] h-16 flex justify-evenly items-center text-white text-sm">
        <a href="#" className="border border-transparent p-1 hover:border-white">
          <img src={logo} alt="Amazon Logo" className="w-24 h-10 mt-2" />
        </a>

        <div className="border border-transparent p-1 hover:border-white">
          <p className="text-xs pl-3">Deliver to</p>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot"></i>
            <p className="font-bold">{location}</p>
          </div>
        </div>

        <div className="text-black flex h-12 p-1">
          <select className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none">
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-[780px] pl-2 text-base"
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="bg-orange-300 rounded-lg rounded-l-none p-2">
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </div>
        </div>

        <div className="flex border border-transparent p-1 hover:border-white">
          <img src="/assets/us_flag.png" className="h-4 w-5" />
          <select className="bg-transparent font-bold">
            <option>EN</option>
          </select>
        </div>

        <div className="border border-transparent p-1 hover:border-white">
          <p className="text-xs pl-1">Hello, sign in</p>
          <select className="bg-transparent font-bold">
            <option>Accounts & Lists</option>
          </select>
        </div>

        <div className="border border-transparent p-1 hover:border-white">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        <div className="flex items-center border border-transparent p-1 hover:border-white">
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <p className="font-bold pt-2">Cart ({cartCount})</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
