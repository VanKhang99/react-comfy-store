import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts: productsList, gridView } = useFilterContext();

  if (productsList.length < 1) {
    return (
      <h5 className="heading-fifth">
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (!gridView) {
    return <ListView productsList={productsList}>product list</ListView>;
  }

  return <GridView productsList={productsList}>product list</GridView>;
};

export default ProductList;
