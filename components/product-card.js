"use client";

import { cn } from "@/utils/cn";
import Link from "./ui/link";
import Button from "./ui/button";
import { useCart } from "@/hooks/cart";
import { MinusSquare, PlusSquare, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ context = "products", ...product }) {
  const { id, title, price, category, image } = product;
  const { addToCart, itemCount, removeFromCart, removeItem } = useCart();

  const [totalPrice, setTotalPrice] = useState(price * itemCount(id));
  console.log("ITEMCOUNT", itemCount);

  return (
    <div
      className={cn(
        "p-4 rounded-md bg-slate-50 w-full h-full shadow-sm hover:ring ring-[#f6831f89]",
        "flex flex-col gap-4",
        "container mx-auto"
      )}
    >
      <div
        className={cn(
          "relative w-full h-[200px] bg-contain bg-center bg-no-repeat"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col flex-1 gap-4 justify-end">
        <div className="flex flex-col gap-1">
          <Link className="font-semibold leading-none text-base" href="#">
            {title}
          </Link>

          <span className="text-[10px] px-[4px] py-[2px] border rounded-full w-fit border-sky-600 text-sky-600 select-none">
            {category}
          </span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span>
            {(context === "products" ? price : totalPrice).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "PHP",
              }
            )}
          </span>
          {context === "products" && (
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
          )}
          {context === "cart" && (
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  removeItem(id);
                  setTotalPrice((prevTotal) => prevTotal - price);
                }}
              >
                <MinusSquare color="#FC2947" />
              </Button>
              <span className="w-fit px-3.5 py-2 rounded-lg border">
                {itemCount(id)}
              </span>
              <Button
                onClick={() => {
                  addToCart(product);
                  setTotalPrice((prevTotal) => prevTotal + price);
                }}
              >
                <PlusSquare color="#0079FF" />
              </Button>
              <Button onClick={() => removeFromCart(id)}>
                <Trash2 color="#FC2947" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
