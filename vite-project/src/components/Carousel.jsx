import React, { useEffect, useRef } from 'react';
import '@/assets/css/carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const sceneRef = useRef(null);

  const images = [
    "https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926",
    "https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867",
    "https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601",
    "https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637",
    "https://ik.imagekit.io/rqds6dyata/pexels-nuno-obey-34504-128303%20(1).jpg?updatedAt=1722102898633",
    "https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-un.jpg?updatedAt=1722102898926",
    "https://ik.imagekit.io/rqds6dyata/vita-vilcina-KtOid0FLjqU-unsplas.jpg?updatedAt=1722102898867",
    "https://ik.imagekit.io/rqds6dyata/pexels-ahmet-cotur-776571149-190.jpg?updatedAt=1722102898601",
    "https://ik.imagekit.io/rqds6dyata/pexels-harrisonhaines-6292341%20(1).jpg?updatedAt=1722102898637",
    "https://ik.imagekit.io/rqds6dyata/pexels-nuno-obey-34504-128303%20(1).jpg?updatedAt=1722102898633"
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const scene = sceneRef.current;
    const carouselItems = scene.children;
    const n = carouselItems.length;
    let currCarouselItem = 0;
    const theta = Math.PI * 2 / n;
    let interval = null;

    const setupCarousel = (n, width) => {
      const apothem = width / (2 * Math.tan(Math.PI / n));
      scene.style.transformOrigin = `50% 50% ${-apothem}px`;

      for (let i = 0; i < n; i++) {
        carouselItems[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        carouselItems[i].style.transform = `rotateY(${i * theta}rad)`;
      }

      setCarouselInterval();
    };

    const setCarouselInterval = () => {
      interval = setInterval(() => {
        currCarouselItem++;
        scene.style.transform = `rotateY(${currCarouselItem * -theta}rad)`;
      }, 3000);
    };

    setupCarousel(n, parseFloat(getComputedStyle(carouselItems[0]).width));

    const handleResize = () => {
      clearInterval(interval);
      setupCarousel(n, parseFloat(getComputedStyle(carouselItems[0]).width));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="carousel" ref={carouselRef} data-auto="true">
      <div id="scene" ref={sceneRef}>
        {images.map((src, index) => (
          <div key={index} className="carousel_item">
            <img src={src} alt={`Carousel item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;