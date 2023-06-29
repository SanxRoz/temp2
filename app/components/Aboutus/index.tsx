"use client";

import Image from "next/image";
import {
  Lightning,
  Heart,
  Cube,
  Person,
  ArrowsOut,
  Shapes,
  BezierCurve,
  Aperture,
} from "@phosphor-icons/react";

interface Elements {
  Lightning: Element;
  Heart: Element;
  Cube: Element;
  Design: Element;
  Playful: Element;
  Big: Element;
  Custom: Element;
  User: Element;
  [key: string]: Element; // This is the index signature
}

interface datatype {
  heading: string;
  icon: string;
  paragraph: string;
}

const iconComponents: Elements[] = {
  Lightning: <Lightning size={80} color="#f59e0b" weight="duotone" />,
  Heart: <Heart size={80} color="#e11d48" weight="duotone" />,
  Cube: <Cube size={80} color="#7c3aed" weight="duotone" />,
  Design: <BezierCurve size={80} color="#2563eb" weight="duotone" />,
  Playful: <Shapes size={80} color="#c026d3" weight="duotone" />,
  Big: <ArrowsOut size={80} color="#ea580c" weight="duotone" />,
  Custom: <Aperture size={80} color="#65a30d" weight="duotone" />,
  User: <Person size={80} color="#0891b2" weight="duotone" />,
};

const Aboutdata: datatype[] = [
  {
    heading: "Fast",
    icon: "Lightning",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Unique",
    icon: "Heart",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Complete",
    icon: "Cube",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "User",
    icon: "User",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Design",
    icon: "Design",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Playful",
    icon: "Playful",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Big",
    icon: "Big",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
  {
    heading: "Custom",
    icon: "Custom",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 py-24 my-25 lg:px-10 rounded-3xl relative">
        <div className="flex justify-center">
          <h3 className="text-[#ffffffe6] bg-[#ffffff1a] border border-[#f2f2f25b] w-fit text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-widest">
            About us
          </h3>
        </div>
        <h4 className="text-center my-6 text-4xl lg:text-65xl font-bold">
          Know how we build.
        </h4>
        <div className="flex flex-col items-center">
          <div className="grid gap-5 grid-cols-1 w-[70%] sm:grid-cols-3 lg:grid-cols-4 my-16">
            {Aboutdata.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 bg-transparent text-white group"
              >
                {iconComponents[item.icon]}
                <h4 className="text-4xl font-bold text-center mb-5">
                  {item.heading}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
