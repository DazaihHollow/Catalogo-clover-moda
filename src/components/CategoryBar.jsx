import categories from '../data/categories.json';

const CategoryBar = ({ active, onChange }) => (
  <nav
    aria-label="Categorías"
    className="no-scrollbar -mx-2 flex-1 overflow-x-auto"
  >
    <ul className="flex items-stretch">
      {categories.map((cat, i) => {
        const isActive = cat.slug === active;
        return (
          <li key={cat.id} className="flex shrink-0 items-stretch">
            {i > 0 && <span aria-hidden="true" className="self-stretch border-l hairline" />}
            <button
              type="button"
              onClick={() => onChange(cat.slug)}
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex h-14 items-center px-4 text-[11px] uppercase tracking-display whitespace-nowrap transition-colors lg:h-16 ${
                isActive ? 'font-bold text-ink' : 'font-medium text-ink/60 hover:text-ink'
              }`}
            >
              {cat.label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-clover text-base leading-none"
                >
                  ·
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default CategoryBar;
