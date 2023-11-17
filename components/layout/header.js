import Link from "@/components/ui/link";
import ShoppingCart from "../shopping-cart";
import Shapipi from "./logo";

export default function Header() {
  return (
    <div className="w-full p-4 bg-[#FBB448] sticky top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <Link
          className="font-extrabold text-3xl !text-white flex items-center"
          href="/"
        >
          <Shapipi className="w-[50px] h-[50px]" />
          Shapipi
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-white hover:text-black font-medium text-xl">Products</Link>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
