export default function ShopFilters({ filters, setFilters }) {
  return (
    <div className="w-[260px] space-y-8 text-sm">
      
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        {["Women", "Men", "Accessories"].map((cat) => (
          <label key={cat} className="flex items-center gap-2">
            <input type="checkbox" />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-3">Color</h3>
        {["black", "gray", "red"].map((c) => (
          <label key={c} className="flex items-center gap-2">
            <input type="checkbox" />
            {c}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-3">Size</h3>
        {["S", "M", "L", "XL"].map((s) => (
          <label key={s} className="flex items-center gap-2">
            <input type="checkbox" />
            {s}
          </label>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full border px-3 py-2"
        />
      </div>

    </div>
  );
}
