

type Props = {
  params: { slug: string };
};

function ProductDetails({ params }: Props) {
    console.log("params ===> ", params)

    return(
      <>
       <h1 className="text-3xl"> Hello world </h1>
      </>
    )
}

export default ProductDetails;
