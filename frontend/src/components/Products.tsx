import SwipperSlidder from "./SwipperSlidder";
import Wrapper from "./Wrapper";



const Products =  () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center px-5 py-20">
        <p className="text-center uppercase font-bold text-[12px] leading-[15px] tracking-widest text-[#0062F5]">
          PRODUCTS
        </p>
        <h3 className="my-8 font-bold text-[32px] leading-[40px] text-center tracking-[0.03em] text-[#212121]'">Check What We Have</h3>
        <div className="w-full mx-auto ">

          <SwipperSlidder />
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;