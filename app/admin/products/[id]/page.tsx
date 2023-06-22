import Product from "../Product";

export default function ({ params }: { params: { id: string } }) {
  return (
    <div className="grid h-full grid-rows-[auto,1fr]">
      <Product id={params.id} />
    </div>
  );
}
