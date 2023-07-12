import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productList = [
  {
    href: "images/bgbaru.jpg",
    brand: "Acer",
    name: "Nitro 5 2023",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/banner1.jpg",
    brand: "",
    name: "Nitro 16",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/banner2.jpg",
    brand: "Truthear x Crinacle",
    name: "ZERO:RED",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "images/banner4.jpg",
    brand: "MSI",
    name: "Stealth GS77",
    bgcolor: "dark",
    height: "tall",
  },
];

export const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    width: 500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className=" pt-5 flex justify-center rounded-xl ">
      <Slider {...carouselSettings} className="overflow-hidden w-1/2">
        {productList.map((item) => (
          <div key={item.href}>
            <img
              className="object-cover w-full xl:h-[30rem] md:h-[250px] sm:h-[300px] rounded-xl "
              src={item.href}
              alt="Card 1"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;