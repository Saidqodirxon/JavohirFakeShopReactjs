import React, { useState } from 'react'

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
  setOpen(!open)
  }
  return (
    <div className="border rounded mb-5">
      <img width={250} src={product.image} alt="" />
      <div>
        <button
          onClick={handleOpen}
          className="btn btn-success d-block w-100 mb-5"
        >
          Read More
        </button>
        <h2 className='mt-5 display-5'>👆</h2>
        {open && (
          <aside>
            <h2 className="fw-bold fs-6">{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>Rating: {product.rating.rate}</p>
          </aside>
        )}
      </div>
    </div>
  );
}

export default Product
