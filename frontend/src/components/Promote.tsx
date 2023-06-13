import Image from "next/image";
import Link from "next/link";
export default function Promote() {
    return (
      <div className="flex flex-col justify-center items-center md:m-10 mt-10">
        <div>
          <div className="flex justify-center font-bold text-blue-700 mb-5">
            PROMOTIONS
          </div>
          <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-4xl font-semibold tracking-wide transition-colors first:mt-0">
            Our Promotions Events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:p-10">
          <div className="md:mx-20">
              <div className="flex flex-col md:flex-row bg-[#d6d6d8] justify-center items-center px-10 py-5 w-[350px] md:w-[600px]">
                  <div className="flex flex-col justify-center items-center">
                      <div><h3 className="scroll-m-20 md:text-2xl font-semibold tracking-tight">GET UP TO</h3><span><h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0">60%</h2></span></div>
                      <div><h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">For the summer season</h4></div>
                  </div>
                  <img src='http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flzplr4pt%2Fproduction%2F4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png&w=828&q=75' alt="girl"/>
              </div>
              <div className="bg-[#212121] mt-5 flex flex-col justify-center items-center w-[350px] md:w-[600px]">
                  <div className="m-10"><h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-white">GET 30% OFF</h2></div>
                  <div className="text-white">USE PROMO CODE</div>
                  {/* <Button className="bg-[#474747] mb-10">DINEWEEKENDSALE</Button> */}
                  <button className=' py-4 md:py-5 px-10 md:px-24 mb-10 bg-[#474747] '>
                            <Link href='/' className='flex items-center justify-center gap-x-2'>
                                <span className='text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 8 8"><path fill="currentColor" d="M.34 1A.506.506 0 0 0 .5 2H2l.09.25l.41 1.25l.41 1.25c.04.13.21.25.34.25h3.5c.14 0 .3-.12.34-.25l.81-2.5c.04-.13-.02-.25-.16-.25H3.3l-.38-.72A.5.5 0 0 0 2.48 1h-2a.5.5 0 0 0-.09 0a.5.5 0 0 0-.06 0zM3.5 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm3 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5z" />
                                    </svg>
                                </span>
                                <span className='font-medium text-white font-arimo'>
                                   DINEWEEKENDSALE
                                </span>
                            </Link>
                        </button>
              </div>
          </div>
          <div className="bg-[#efe1c7] md:mx-[250px] w-[350px] md:w-[300px] flex flex-col justify-center items-center mt-6 md:mt-0">
            <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">Flex Sweatshirt</h4>
            <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-1 text-black-100"><s>$100.00</s> <span className="font-bold">$75.00</span></h4>
            <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flzplr4pt%2Fproduction%2F4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png&w=828&q=75" alt="person2"/>
          </div>
          <div className="bg-[#d7d7d9] md:ml-[120px] w-[350px] md:w-[300px] flex flex-col justify-center items-center mt-6 md:mt-0">
            <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">Flex Push Button Bomber</h4>
            <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-1 text-black-100"><s>$225.00</s> <span className="font-bold">$190.00</span></h4>
            <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flzplr4pt%2Fproduction%2F4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png&w=828&q=75" alt="person3"/>
          </div>
  
        </div>
      </div>
    );
  }