"use client"

import { useCart } from "@/hooks/cart"
import ProductCard from "./product-card"
import Link from "./ui/link"

export default function CartProducts() {
  const { cart, totalItems } = useCart()

  if (totalItems === 0)
    return (
      <div className="text-center">
        Your cart is empty.{" "}
        <Link href="/" className="text-base">
          Add products
        </Link>
      </div>
    )

  return Object.entries(cart).map(([, { product }]) => {
    return <ProductCard key={product.id} {...product} context="cart" />
  })
}
