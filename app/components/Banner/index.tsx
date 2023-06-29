import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl my-10">
      <div className="flex justify-center">
        {/* COLUMN-1 */}

        <div className="border_back relative w-[90%]">
          <div className="grid_pattern relative justify-center overflow-auto rounded-[20px] flex mx-auto sm:mx-0 p-10 md:p-14 lg:p-20">
            <div className="relative flex items-center flex-col">
              <div className="py-3 text-center lg:text-start">
                <button className="text-[#ffffffe6] bg-[#ffffff1a] border border-[#f2f2f25b] text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider">
                  Create as bolt
                </button>
              </div>
              <div className="py-3 text-center lg:text-start">
                <h1 className="text-5xl lg:text-80xl font-bold text-center text-white">
                  Dare to Imagine,
                  <br /> Dare to Create.
                </h1>
              </div>
              <div className="my-7 text-center lg:text-start">
                <button className="text-sm md:text-xl font-semibold bg-white text-black py-3 px-6 md:py-5 md:px-14 border border-white rounded-full hover:bg-transparent hover:text-white hover:backdrop-blur-sm">
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
