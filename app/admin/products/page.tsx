// import Link from "next/link";
// import { IoAddCircleOutline } from "react-icons/io5";
// import ProductLink from "./ProductLink";
// import { getAllProducts } from "~/lib/db/product";

// export default async function () {
//   const products = await getAllProducts();

//   return (
//     <>
//       <div className="flex items-center justify-between px-8 py-6">
//         <h1 className="text-2xl font-bold">Products</h1>
//         <Link
//           href="/admin/products/new"
//           className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
//         >
//           <IoAddCircleOutline />
//           <span>New Product</span>
//         </Link>
//       </div>
//       <div className="px-8 py-6">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-gray-600 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Description</th>
//               <th className="px-4 py-3">Price</th>
//               <th className="px-4 py-3">Stock</th>
//               <th className="px-4 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-gray-900">
//             {products.map(product => (
//               <ProductLink key={"product" + product.id} product={product} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// Import Link from Next.js for routing
import Link from "next/link";
// Import React Icons for adding icons to UI elements
import { IoAddCircleOutline } from "react-icons/io5";
// Import ProductLink component for displaying product details
import ProductLink from "./ProductLink";
// Import getAllProducts function for fetching products from database
import { getAllProducts } from "~/lib/db/product";

export default async function () {
  // Fetch products from database
  const products = await getAllProducts();

  return (
    <>
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">Products</h1>
        {/* Add a Link component for creating a new product */}
        <Link href="/admin/products/new">
          {/* Add a button component with an icon and a text */}
          <button className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            <IoAddCircleOutline />
            <span>New Product</span>
          </button>
        </Link>
      </div>
      <div className="px-8 py-6">
        {/* Add some border-radius to the table corners */}
        <table className="w-full border-gray-600 border rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-600 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {/* Map over the products array and render a ProductLink component for each product */}
            {products.map(product => (
              // Use alternating row colors and hover effects
              <ProductLink
                key={"product" + product.id}
                product={product}
                // className="odd:bg-gray-800 even:bg-gray-900 hover:bg-gray-700"
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
