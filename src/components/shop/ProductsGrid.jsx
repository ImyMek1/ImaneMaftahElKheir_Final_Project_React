import ProductsCard from "./ProductsCard";

export default function ProductsGrid({ products, filters }) {

  let filteredProducts = [...products];

  if (filters.search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.sort === "az") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filters.sort === "za") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (filters.sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  filteredProducts = filteredProducts.slice(0, filters.limit);

  return (
    <div className="grid grid-cols-3 gap-8 flex-1">
      {filteredProducts.map((p) => (
        <ProductsCard key={p.id} product={p} />
      ))}
    </div>
  );
}

