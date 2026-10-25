export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <section className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() => onFilterChange(filter.key)}
          style={{
            backgroundColor: currentFilter === filter.key ? "#2563eb" : "#e5e7eb",
            color: currentFilter === filter.key ? "#fff" : "#111827",
          }}
        >
          {filter.label}
        </button>
      ))}
    </section>
  );
}