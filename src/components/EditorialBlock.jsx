import { ArrowRightIcon } from './Icons';

const EditorialBlock = ({ product, onOpen }) => {
  if (!product) return null;
  return (
    <section
      id="editorial"
      aria-labelledby="editorial-heading"
      className="hairline-t px-6 py-20 lg:px-12 lg:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-display text-clover">
            N° 02 <span className="mx-2 text-ink/30">/</span> Pieza de la semana
          </p>
          <h2
            id="editorial-heading"
            className="font-serif text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.92] tracking-tightest text-ink"
          >
            {product.name.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? 'italic' : ''}>
                {word}
                {i < arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/80">
            {product.description}
          </p>
          <div className="mt-10 flex items-center gap-8">
            <p className="font-serif text-2xl tabular-nums">${product.price}</p>
            <button
              type="button"
              onClick={() => onOpen(product)}
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-xs font-bold uppercase tracking-display text-ink transition-colors active:scale-95 hover:border-clover hover:text-clover"
            >
              Ver pieza
              <ArrowRightIcon size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <button
            type="button"
            onClick={() => onOpen(product)}
            aria-label={`Ver ${product.name}`}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-surface active:scale-[0.99] transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              width="800"
              height="1000"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span
              aria-hidden="true"
              className="absolute top-4 left-4 font-serif italic text-clover text-3xl leading-none"
            >
              01
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorialBlock;
