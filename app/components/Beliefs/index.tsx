const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        {/* COLUMN-1 */}

        <div className="bg-[#252525]  py-12 px-10 sm:px-24 md:pb-70 rounded-3xl shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)]">
          <h3 className="text-4xl sm:text-65xl font-bold text-[#4338ca] leading-snug mb-5 text-center sm:text-start">
            Innovation{" "}
            <span className="text-[#4338ca26]">is our driving force.</span>
          </h3>
          <h5 className="text-[#a5b4fc] pt-2 mb-5 text-center sm:text-start">
            We believe in pushing boundaries and thinking outside the box to
            deliver unique, fresh ideas.
          </h5>
        </div>

        {/* COLUMN-2 */}

        <div className="bg-build bg-[#252525]  py-12 px-10 sm:px-24 md:pb-70 shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] rounded-3xl">
          <h3 className="text-4xl sm:text-65xl font-bold text-[#c2410c26] leading-snug mb-5 text-center sm:text-start">
            <span className="text-[#c2410c]">Collaboration </span> is our
            method.
          </h3>
          <h5 className="bluish text-[#fdba74] pt-2 mb-5 text-center sm:text-start">
            We partner with our clients, incorporating their vision and feedback
            into our creative process to achieve the best results.
          </h5>
        </div>

        {/* COLUMN-3 */}

        <div className=" bg-[#252525] shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.1)] col-span-2 py-12 px-10 sm:px-24 md:pb-70 rounded-3xl">
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            Excellence{" "}
            <span className="text-[#ffffff26]">is our standard.</span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            We strive to exceed expectations in everything we do, from initial
            concepts to final deliverables.
          </h5>
          <div className="text-center sm:text-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
