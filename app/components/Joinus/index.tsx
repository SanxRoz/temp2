const Join = () => {
  return (
    <div className="bg-joinus my-25">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <h3 className="text-[#ffffffe6] bg-[#ffffff1a] border border-[#f2f2f25b] w-fit text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-widest">
              Join us
            </h3>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            {" "}
            Create in a new level.
          </h2>
          <p className="text-lightblack text-base font-normal">
            Craven omni memoria patriae zombieland clairvius narcisse religionis
            sunt diri undead <br /> historiarum. Golums, zombies unrelenting et
            Raimi fascinati beheading.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] mx-5 p-5 sm:p-0 rounded-[35px] justify-between sm:rounded-[35px]">
            <div>
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-[#ffffffe6] sm:rounded-full pl-1 bg-transparent focus:outline-none bg-emailbg focus:text-[#ffffffe6] placeholder:text-[#ffffff66]"
                placeholder="name"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                className="my-4 py-4 sm:pl-6 placeholder:text-[#ffffff66] lg:text-xl text-[#ffffffe6] bg-transparent focus:outline-none bg-emailbg focus:text-[#ffffffe6]"
                placeholder="email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-black hover:bg-white hover:text-black"
              >
                Join!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
