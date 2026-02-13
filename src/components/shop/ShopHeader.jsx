export default function ShopHeader({ filters, setFilters }) {
  return (
    <div className="flex justify-end gap-6 text-sm">
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="border px-3 py-2"
      >
        <option value="featured">Featured</option>
        <option value="az">Alphabetically, A-Z</option>
        <option value="za">Alphabetically, Z-A</option>
        <option value="low">Price, low to high</option>
        <option value="high">Price, high to low</option>
      </select>

      <select
        value={filters.limit}
        onChange={(e) => setFilters({ ...filters, limit: e.target.value })}
        className="border px-3 py-2"
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}
