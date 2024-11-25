import React, { useState } from 'react';
import Header from './components/Header';
import Mainsection from './components/Mainsection';
import Footer from './components/Footer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Books', 'Electronics', 'Clothing'];

  const gridItems = [
    {
      title: 'Shop school essentials',
      image: 'assets/1 (1).jpg',
      cta: 'See more',
      link: '#',
    },
    {
      title: 'Home & Kitchen Under $30',
      image: 'assets/2.jpg',
      cta: 'Shop now',
      link: '#',
    },
    {
      title: 'Health & Personal Care',
      image: 'assets/3.jpg',
      cta: 'Shop now',
      link: '#',
    },
    {
      title: 'Beauty picks',
      image: 'assets/4.jpg',
      cta: 'Shop now',
      link: '#',
    },
    {
      title: 'Electronics',
      image: 'assets/5.jpg',
      cta: 'See more',
      link: '#',
    },
    {
      title: 'Toys Under $30',
      image: 'assets/6.jpg',
      cta: 'Shop now',
      link: '#',
    },
    {
      title: 'For your Fitness Needs',
      image: 'assets/7.jpg',
      cta: 'Shop now',
      link: '#',
    },
    {
      title: 'Discover fashion trends',
      image: 'assets/8.jpg',
      cta: 'See more',
      link: '#',
    }, {
      title: 'Discover fashion trends',
      image: '/public/assets/box1-1.jpg',
      cta: 'See more',
      link: '#',
    }, {
      title: 'Discover fashion trends',
      image: '/public/assets/box2-2.jpg',
      cta: 'See more',
      link: '#',

    },{
      title: 'Discover fashion trends',
      image: '/public/assets/box1-3.jpg',
      cta: 'See more',
      link: '#',
    },{
      title: 'Discover fashion trends',
      image: '/public/assets/box1-4.jpg',
      cta: 'See more',
      link: '#',
    },{
      title: 'Discover fashion trends',
      image: '/public/assets/box3-1.jpg',
      cta: 'See more',
      link: '#',
    },
    {
      title: 'Discover fashion trends',
      image: '/public/assets/box3-2.jpg',
      cta: 'See more',
      link: '#',
    },{
      title: 'Discover fashion trends',
      image: '/public/assets/box3-3.jpg',
      cta: 'See more',
      link: '#',
    },{
      title: 'Discover fashion trends',
      image: '/public/assets/box3-4.jpg',
      cta: 'See more',
      link: '#',
    }


  ];
  const bannerImages = [
    "assets/header1.jpg",
    "assets/header2.jpg",
    "assets/header3.jpg",
    "assets/header4.jpg",
    "assets/header5.jpg",
    "assets/header6.jpg",
  ];



  return (
    <div>
      <Header
        logo="assets/amazon_logo.png"
        location="India"
        cartCount={3}
        categories={categories}
        onSearch={setSearchTerm}
      />
      <Mainsection
        bannerImages={bannerImages}
        bannerText="You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery."
        gridItems={gridItems}
      />
      <Footer />
    </div>
  );
};

export default App;
