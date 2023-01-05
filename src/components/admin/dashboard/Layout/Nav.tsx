import Link from "next/link";

const Nav = () => {
  return (
    <nav className="">
      <ul>
        <li>
          <Link href={"/admin/dashboard/"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/orders"}>Orders</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/customers"}>Customers</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard/reports"}>Reports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
