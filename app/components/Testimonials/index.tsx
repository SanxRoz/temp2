"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { Star } from "@phosphor-icons/react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Sarah Thompson",
    profession: "CEO of Thompson Tech Solutions",
    comment:
      "Working with Bold was a game-changer for our brand. Their creativity and dedication brought our vision to life in ways we couldn't have imagined. We've seen a significant increase in our brand recognition and customer engagement since we started working with them.",
    imgSrc: "/images/testimonial/user1.jpg",
  },
  {
    name: "Michael Rodriguez",
    profession: "Marketing Director at Green Earth Organics",
    comment:
      "Bold's team is incredibly talented and easy to work with. They took the time to understand our needs and delivered a product that exceeded our expectations. Their innovative approach to design has truly set our business apart in the market.",
    imgSrc: "/images/testimonial/user2.jpg",
  },
  {
    name: "Linda Chen",
    profession: "Owner of Chen's Handmade Jewelry",
    comment:
      "Bold is the epitome of creativity and professionalism. They transformed our outdated website into a modern, user-friendly platform that has significantly improved our online presence. I can't recommend them enough!",
    imgSrc: "/images/testimonial/user3.jpg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div
        className="bg-testimonial pt-40 pb-32 lg:py-32"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold my-3">
              See what others are saying.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i} className="relative">
                <div className="bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] m-3 p-10 my-20 rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={71}
                    height={71}
                    className="inline-block rounded-full m-auto absolute test-pos"
                  />
                  <h4 className="text-base font-medium my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "lightgrey" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-xs font-medium  pb-2 opacity-50">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <Star width={20} color="#eab308" weight="duotone" />
                      <Star width={20} color="#eab308" weight="duotone" />
                      <Star width={20} color="#eab308" weight="duotone" />
                      <Star width={20} color="#eab308" weight="duotone" />
                      <Star width={20} color="#eab308" weight="duotone" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
