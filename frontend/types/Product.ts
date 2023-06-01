import { PortableTextBlock } from "sanity";

export type Product = {
    _id: string;
    image: string;
    name: string;
    category: string;
    tags: string;
    slug: string;
    price: number;
    details: PortableTextBlock;
    care: PortableTextBlock;   
}