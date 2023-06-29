"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/buffer.webp",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/evernote.webp",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/mixpanel.webp",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/slack.webp",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/asana.webp",
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: "/images/wework/unbounce.webp",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
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
      <div className="bg-wework my-25 py-20">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-2xl sm:text-2xl font-bold my-2">
              Trusted by global brands
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="text-[#ffffffe6] bg-[#ffffff1a] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] w-fit grayscale m-3 px-5 py-2.5 my-10 text-center rounded-2xl">
                <div className="relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={1000}
                    height={400}
                    className="img_auto inline-block m-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
