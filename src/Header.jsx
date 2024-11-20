import React from 'react'

const Header = () => {
  return (
    <header>
        <nav class="bg-[#0F1111] h-16 flex justify-evenly items-center text-white text-sm">
            <a href="#" class="border border-transparent p-1 hover:border-white">
                <img src="/public/assets/amazon_logo.png" alt="" class="w-24 h-10 mt-2"/>
            </a>

            <div class="border border-transparent p-1 hover:border-white">
                <p class="text-xs pl-3">Deliver to</p>
                <div class="flex items-center gap-1">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="font-bold">India</p>
                </div>
            </div>

            <div class="text-black flex h-12 p-1">
                <select class="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none">
                    <option>All</option>
                </select>
                <input type="text" placeholder="Search Amazon" class="w-[780px] pl-2 text-base"/>
                <div class="bg-orange-300 rounded-lg rounded-l-none p-2">
                    <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                </div>
            </div>

            <div class="flex border border-transparent p-1 hover:border-white">
                <img src="/assets/us_flag.png" class="h-4 w-5"/>
                <select class="bg-transparent font-bold">
                    <option>EN</option>
                </select>
            </div>

            <div class="border border-transparent p-1 hover:border-white">
                <p class="text-xs pl-1">Hello, sign in</p>
                <select class="bg-transparent font-bold">
                    <option>Accounts & Lists</option>
                </select>
            </div>

            <div class="border border-transparent p-1 hover:border-white">
                <p class="text-xs">Returns</p>
                <p class="font-bold">& Orders</p>
            </div>

            <div class="flex items-center border border-transparent p-1 hover:border-white">
                <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                <p class="font-bold pt-2">Cart</p>
            </div>

        </nav>

        <div class="bg-[#222F3D] h-10 flex items-center text-white text-sm pl-4">
            <div class="flex items-center gap-1 border border-transparent p-2 hover:border-white">
                <i class="fa-solid fa-bars fa-lg"></i>
                <p class="font-bold">All</p>
            </div>

            <ul class="flex items-center">
                <li class="border border-transparent p-2 hover:border-white">Today's Deals</li>
                <li class="border border-transparent p-2 hover:border-white">Customer Service</li>
                <li class="border border-transparent p-2 hover:border-white">Registry</li>
                <li class="border border-transparent p-2 hover:border-white">Gift Cards</li>
                <li class="border border-transparent p-2 hover:border-white">Sell</li>
            </ul>
        </div>

    </header>
  )
}

export default Header