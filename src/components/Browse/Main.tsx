import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 10,
    image: "https://picsum.photos/1000",
  },
  {
    id: "2",
    name: "Product 2",
    price: 20,
    image: "https://picsum.photos/2500",
  },
  {
    id: "3",
    name: "Product 3",
    price: 30,
    image: "https://picsum.photos/3000",
  },
  {
    id: "4",
    name: "Product 4",
    price: 40,
    image: "https://picsum.photos/2000",
  },
  {
    id: "5",
    name: "Product 5",
    price: 50,
    image: "https://picsum.photos/1200",
  },
  {
    id: "6",
    name: "Product 6",
    price: 60,
    image: "https://picsum.photos/1500",
  },
  {
    id: "7",
    name: "Product 7",
    price: 70,
    image: "https://picsum.photos/600",
  },
  {
    id: "8",
    name: "Product 8",
    price: 80,
    image: "https://picsum.photos/800",
  },
  {
    id: "9",
    name: "Product 9",
    price: 90,
    image: "https://picsum.photos/900",
  },
  {
    id: "10",
    name: "Product 10",
    price: 100,
    image: "https://picsum.photos/4000",
  },
];

const Main = () => {
  return (
    <main className="grid min-h-full gap-4 overflow-y-scroll p-4 scrollbar-none xl:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden border border-current bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="absolute bottom-0 w-full translate-y-full bg-white bg-opacity-30 backdrop-blur-3xl transition-all group-hover:translate-y-0">
            <div className="flex justify-between p-4">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4">
              <button className="rounded-md bg-black p-2 text-white">
                Add to cart
              </button>
              <button className="rounded-md bg-black p-2 text-white">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
