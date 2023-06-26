import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl my-10">
      <div className="flex justify-center">
        {/* COLUMN-1 */}

        <div className="border_back relative w-[90%] p-5 md:p-7 lg:p-10">
          <div className="grid_pattern relative rounded-[20px] flex mx-auto sm:mx-0 p-5 md:p-7 lg:p-10">
            <div className="relative flex items-center flex-col">
              <div className="py-3 text-center lg:text-start">
                <button className="text-[#ffffffe6] bg-[#ffffff1a] border border-[#f2f2f25b] text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider">
                  Design in bold
                </button>
              </div>
              <div className="py-3 text-center lg:text-start">
                <h1 className="text-5xl lg:text-80xl font-bold text-center text-white">
                  Dedicated to bring your ideas to life.
                </h1>
              </div>
              <div className="my-7 text-center lg:text-start">
                <button className="text-sm md:text-xl font-semibold bg-white text-black py-3 px-6 md:py-5 md:px-14 border border-white rounded-full hover:bg-transparent hover:text-white hover:backdrop-blur-3xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
