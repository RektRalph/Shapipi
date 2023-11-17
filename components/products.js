import ProductCard from "./product-card"
import { Loader2 } from "lucide-react"
import { API_URL } from "@/utils/fakestore"

const getProducts = async () => {
  const res = await fetch(`${API_URL}/products?limit=20`)
  const json = await res.json()
  return json
}

export default async function Products() {
  const products = await getProducts()

  if (!products.length)
    return (
      <div className="w-full mt-12">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" />
      </div>
    )

  return (
    <div className="py-4 bg-slate-200 grid grid-cols-4 gap-4 w-full container mx-auto">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />
      })}
    </div>
  )
}
