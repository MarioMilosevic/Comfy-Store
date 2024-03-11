import React from 'react';
import Product from './Product';
const Products = ({ store }) => {
  return (
    <>
      <div className="border-b py-4 text-sm mb-10">
        <p>{store.totalProducts} Products</p>
      </div>
      {store.totalProducts > 0 && (
        <section className="py-4 grid grid-cols-3 gap-4">
          {store.products.map((product) => {
            const { attributes } = product;
            const { image, title, price } = attributes;
            return (
              <Product
                key={product.id}
                image={image}
                title={title}
                price={price}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Products;

