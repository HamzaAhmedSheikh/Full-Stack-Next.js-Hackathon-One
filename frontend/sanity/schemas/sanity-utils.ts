import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";

export async function getProducts() {
    const query = groq`*[_type == "product"] {
        _id,
        name,
        tags,
        price,
        "slug": slug.current,
        "image": image.asset->url,
    }`;
    const products = await client.fetch(query);

    return products;
}

export async function getProductBySlug(slug: string) {
    const query = groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        details,
        price,
        tags,
        care,
        "slug": slug.current,
        "image": image.asset->url,
    }`;
    
    const product = await client.fetch(query, { slug });

    return product;
}

export const getMaleProductData = async () => {
    const query = groq`*[_type == "product" && category == "Male"]{
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

  
  export const getKidproductdata = async () => {
    const res = await client.fetch(`*[_type == "product" && category == "Kid"]{
      _id,
      title,
      price,
      type,
      image,
      "slug" : slug.current
    }`)
    return res
  }
  
export const getFemaleproductdata = async () => {
    const res = await client.fetch(`*[_type == "product" && category == "Female"]{
      _id,
      title,
      price,
      type,
      image,
      "slug" : slug.current
    }`)
    return res
  }

