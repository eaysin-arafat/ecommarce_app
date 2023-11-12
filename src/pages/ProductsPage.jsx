import { useDispatch } from "react-redux";
import { Filters, PageHero, ProductList, Sort } from "../components";
import { useEffect } from "react";
import { allProducts } from "../features/products/productApiSlice";

export const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className="section-center grid gap-x-6 gap-y-12 !my-16 mx-auto lg:grid lg:grid-cols-for-product">
          <div className="">
            <Filters />
          </div>
          <div className="">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};
