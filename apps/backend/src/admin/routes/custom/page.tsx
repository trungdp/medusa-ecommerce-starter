import { useAdminProducts } from "medusa-react"

const CustomPage = () => {
  const { products } = useAdminProducts()
  return (
    <div className="bg-white">
      {products?.map((product) => product.title)}
    </div>
  )
}

export default CustomPage