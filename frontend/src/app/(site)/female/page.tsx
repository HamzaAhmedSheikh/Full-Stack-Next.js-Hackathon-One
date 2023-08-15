import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const getFemaleProductData = async () => {
    const query = groq`*[_type == "product" && category == "Female"]{
        _id,
        name,
        details,
        price,
        tags,
        care,
        "slug": slug.current,
        "image": image.asset->url,
    }`

    const product = await client.fetch(query);

    return product;
  }


 export default async function MaleProducts() {
    let getFemaleProducts = await getFemaleProductData();
   
    // console.log("getData ==> ", getData)
  
    return (
        <div className="relative py-4 justify-center">
      <div className="relative"> 
      <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:grid-cols-4 lg:max-w-7xl">
      {
        getFemaleProducts.map((data: any) => {
          return (            
             <div key={data._id} className="flex flex-col">
             <Link href={`/products/${data.slug}`} className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'>
                 {
                   data.image && (
                    <div>
                     <Image src={data.image} alt={data.name} width={380} height={400} loading="lazy" className="object-cover" />
                    </div>
                    )
                  }   
                  <div className="flex flex-col flex-1 pr-6 pl-1">
                    <div className="flex-1">
                      <p className="font-semibold leading-6 text-base text-[#212121] tracking-[0.03em] mt-2"> {data.name} </p>
                      <p className="font-semibold leading-[15px] text-[#888888] mt-2">{data.tags}</p>
                      <p className="font-semibold leading-6 text-[1.25rem] text-[#212121] tracking-[0.03em] mt-4"> ${data.price} </p>
                    </div>
                  </div>        
             </Link>
             </div>             
           
          )          
        })
      
      }     
       </div>
      </div>
     </div>
     
    )
}
