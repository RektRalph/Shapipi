"use client"

import { ShoppingCart as ShoppingCartIcon } from "lucide-react"
import Link from "./ui/link"
import { cn } from "@/utils/cn"
import { useCart } from "@/hooks/cart"

export default function ShoppingCart() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart" className="relative">
      <span
        className={cn(
          "absolute -right-3 -top-3 text-white bg-red-600 rounded-full aspect-square",
          "w-6 h-6 text-xs flex items-center justify-center"
        )}
      >
        {totalItems}
      </span>
      <ShoppingCartIcon color="#fff" size={30} strokeWidth={3} />
    </Link>
  )
}
