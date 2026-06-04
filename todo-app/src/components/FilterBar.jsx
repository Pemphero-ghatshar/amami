export default function FilterBar({ filter, setFilter, search, setSearch }) {
  return (
    <div className="card fade-in">
      <div className="mb-4">
        <input
          type="text"
          className="input-field"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn ${
              filter === f
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-dark hover:bg-gray-300'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}
