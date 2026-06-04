import { PlusIcon } from './Icons';

const formatNumber = (i) => String(i + 1).padStart(2, '0');

const ProductCard = ({ product, index = 0, onOpen }) => {
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(product);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(product)}
      onKeyDown={onKey}
      aria-label={`${product.name} — ${product.subcategory}, ${product.price} ${product.currency}. Ver detalle.`}
      className="group block text-left focus:outline-none"
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={`${product.name} — ${product.subcategory}`}
          loading="lazy"
          width="800"
          height="800"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span
          aria-hidden="true"
          className="absolute top-3 left-3 font-serif italic text-clover text-2xl leading-none"
        >
          {formatNumber(index)}
        </span>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Agregar ${product.name} al carrito`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-white text-ink opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 focus-visible:opacity-100 active:scale-90"
        >
          <PlusIcon size={14} />
        </button>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3 border-t hairline pt-3">
        <div className="min-w-0">
          <h3 className="truncate font-serif text-base leading-tight">{product.name}</h3>
          <p className="mt-0.5 text-[10px] uppercase tracking-display text-ink/65">
            {product.subcategory}
          </p>
        </div>
        <p className="shrink-0 text-sm font-medium tabular-nums">
          {product.originalPrice != null && (
            <span className="mr-1.5 text-xs text-ink/55 line-through">
              ${product.originalPrice}
            </span>
          )}
          ${product.price}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
