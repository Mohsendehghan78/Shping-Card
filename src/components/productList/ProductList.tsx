import {type ReactNode } from 'react'

type ProductPropsList={
    children:ReactNode
}

function ProductList({children}:ProductPropsList) {
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default ProductList