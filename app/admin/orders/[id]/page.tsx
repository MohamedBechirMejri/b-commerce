import Product from "../Product";

// TODO: use ssr to get the product data and add loadinc page

export default function ({ params }: { params: { id: string } }) {
  return (
    <div className="grid h-full grid-rows-[auto,1fr]">
      <Product id={params.id} />
    </div>
  );
}
