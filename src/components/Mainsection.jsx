import React, { useState, useEffect } from "react";

const Mainsection = ({ bannerImages, bannerText, gridItems }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 3000);
    return () => clearInterval(interval); 
  }, [currentImageIndex]);

  return (
    <main className="bg-[#E6E6E6] pb-5 relative">
      <div
        className="bg-cover h-80 flex justify-center items-end relative"
        style={{
          backgroundImage: `url('${bannerImages[currentImageIndex]}')`,
        }}
      >
        <div className="bg-white text-sm h-10 flex justify-center items-center w-[1460px] mb-6">
          <p>
            {bannerText}{" "}
            <a
              href="#"
              className="text-[#007185] hover:underline hover:text-orange-500"
            >
              Click here to go to amazon.in
            </a>
          </p>
        </div>

        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-80 p-3 rounded-full shadow-lg hover:bg-opacity-90 z-10"
        >
          <i className="fa-solid fa-arrow-left fa-lg text-gray-800"></i>
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-opacity-80 p-3 rounded-full shadow-lg hover:bg-opacity-90 z-10"
        >
          <i className="fa-solid fa-arrow-right fa-lg text-gray-800"></i>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 px-4">
        {gridItems.map((item, index) => (
          <div key={index} className="bg-white p-4">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <img src={item.image} alt={item.title} className="my-3" />
            <a href={item.link} className="text-xs text-[#007185]">
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Mainsection;
