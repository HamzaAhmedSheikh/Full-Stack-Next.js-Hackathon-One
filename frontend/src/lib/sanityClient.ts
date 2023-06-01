import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";


export let client = createClient({  
  dataset: "production", 
  apiVersion: "2023-05-26",  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: true,    
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);