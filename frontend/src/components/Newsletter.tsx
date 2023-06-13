
export default function Newsletter() {
    return (
      <div className="flex justify-center relative z-10 items-center flex-col text-center px-5 md:px-40 py-20 md:py-32">
        <div className="text-6xl md:text-9xl mt-10 tracking-wide text-[#f2f3f7] absolute font-extrabold z-0">
          Newsletter
        </div>
        <h2 className="scroll-m-20 pb-2 text-2xl md:text-4xl font-semibold transition-colors first:mt-0 z-20 tracking-wide">
          Subscribe Our Newsletter
        </h2>
        <p className="flex text-lg font-light z-20 tracking-wide">
          Get the latest information and promo offers directly
        </p>
        <form className="z-20">
          <div className="flex  max-w-sm  space-x-3 pt-5  min-[550px]:flex-row flex-col items-center w-full gap-3 mt-5">
            <input type="email" placeholder="Input Email Address" className="grow max-[550px]:w-4/5 flex leading-none text-[0.80rem] font-light placeholder-black border border-black px-4 py-2.5" />
            <button type="submit" className="flex w-fit justify-center items-center bg-black text-sm text-white font-semibold px-3 py-2"> Get Started </button>
          </div>
        </form>
      </div>
    );
  }