import { useState } from "react";
import ShopHeader from "../components/shop/ShopHeader";
import ShopFilters from "../components/shop/ShopFilters";
import ProductsGrid from "../components/shop/ProductsGrid";
import products from "../json/products.json";

export default function Shop() {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
    search: "",
    sort: "az",
    limit: 10
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <ShopHeader filters={filters} setFilters={setFilters} />

      <div className="flex gap-10 mt-10">
        <ShopFilters filters={filters} setFilters={setFilters} />
        <ProductsGrid products={products} filters={filters} />
      </div>
    </div>
  );
}
