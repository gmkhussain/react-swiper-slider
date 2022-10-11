import React, { useEffect } from "react";
import Swiper from "swiper";
import CardItem from "./Card";
let imgs = [
  "https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg",
  "https://5.imimg.com/data5/VY/QT/MY-51857835/banana-fruit-500x500.jpg",
  "https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5"
];

function Card() { 

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true
    }); 
  }, []);

  return (
    <div className="swiper container mx-auto my-5 !pl-5 !pr-1 ">
      <div className="swiper-wrapper">
        <CardItem
          image={imgs[0]}
          rating={"2.5"}
          desc={"Life lessons with Katie Zaferes"}
          price={"130"}
          status={"Online"}
          count={"30"}
          country={"USA"}
        />
        <CardItem
          image={imgs[1]}
          rating={"3.6"}
          desc={"Learn wedding photography"}
          price={"160"}
          count={"6"}
          country={"UK"}
        />
        <CardItem
          image={imgs[2]}
          rating={"4.7"}
          desc={"Group Mountain Biking"}
          price={"180"}
          count={"12"}
          country={"CA"}
        />
      </div>
    </div>
  );
}

export default Card;
