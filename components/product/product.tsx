"use client";

import { ProductCard } from "./productCard";

export const Product = () => {
  return (
    <div className="flex flex-wrap -mx-3">
      {Array(10)
        .fill({
          id: 1,
          name: "Product Name",
          price: 100,
          discountPrice: 90,
        })
        .map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
    </div>
  );
};
