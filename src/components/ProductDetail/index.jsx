import { useContext } from "react"
import { ProductDetailContext } from "../../context/product-detail-context"
import { XIcon } from "../../utils/icons"

export default function ProductDetail() {
  const { isOpen, toggleProductDetail, productDetail } = useContext(ProductDetailContext)
  
  const handleClick = () => {
    toggleProductDetail()
  }
  return (
    (productDetail) && <aside className={`${isOpen ? 'block animate-fade-left animate-duration-300' : 'hidden'} w-[360px] fixed right-0 min-h-[calc(100vh-60px)] bg-gray-600 z-30 rounded-l-md p-4`}>
    <div className="flex flex-row justify-between items-center">
      <b>Detail</b>
      <button type="button" onClick={ handleClick }>
        <XIcon />
      </button>
    </div>
    <div className="flex flex-col mt-4">
      <h2 className="font-bold text-xl mb-2">{productDetail.title}</h2>
      <img className="rounded-md my-4" src={productDetail.images[0]} alt={productDetail.title}/>
      <p>{productDetail.description}</p>
      <p className="text-right text-4xl my-4"><b>$ {productDetail.price}</b></p>
      <p className="self-end justify-self-end"><small>Last updated: <b>{productDetail.updatedAt}</b></small></p>
    </div>
  </aside>
  )
}