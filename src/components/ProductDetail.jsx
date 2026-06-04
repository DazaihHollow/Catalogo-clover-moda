import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowRightIcon, CloseIcon } from './Icons';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getVisibleFocusable = (root) =>
  Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => el.offsetParent !== null || el === document.activeElement
  );

const ProductDetail = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const modalRef = useRef(null);
  const titleId = useId();

  const gallery = useMemo(
    () => (product ? [product.image, product.image, product.image] : []),
    [product]
  );

  useEffect(() => {
    if (!product) return undefined;
    setSelectedSize(null);
    setSelectedColor(product.colors?.[0] ?? null);
    setImageIndex(0);
  }, [product]);

  useEffect(() => {
    if (!product) return undefined;
    const modal = modalRef.current;
    if (!modal) return undefined;

    const previouslyFocused = document.activeElement;
    const focusables = getVisibleFocusable(modal);
    focusables[0]?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const list = getVisibleFocusable(modal);
        if (list.length === 0) {
          e.preventDefault();
          return;
        }
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
      if (
        previouslyFocused &&
        typeof previouslyFocused.focus === 'function' &&
        document.contains(previouslyFocused)
      ) {
        previouslyFocused.focus();
      }
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[90] overflow-y-auto bg-paper"
    >
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between hairline-b bg-paper/95 px-6 backdrop-blur-md lg:px-12">
        <p className="text-[11px] font-bold uppercase tracking-display text-ink/65">
          N° {product.id.slice(-3)} <span className="mx-2 text-ink/30">/</span> {product.subcategory}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle de producto"
          className="-mr-2 flex h-11 w-11 items-center justify-center transition-transform active:scale-90"
        >
          <CloseIcon aria-hidden="true" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-3.5rem)]">
        <div className="bg-surface-dim">
          <div className="relative aspect-square overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={gallery[imageIndex]}
              alt={`${product.name}, imagen ${imageIndex + 1} de ${gallery.length}`}
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute top-4 left-4 font-serif italic text-clover text-3xl leading-none"
            >
              {String(imageIndex + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex gap-2 p-4 lg:hidden">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setImageIndex(i)}
                aria-label={`Ver imagen ${i + 1} de ${product.name}`}
                aria-current={i === imageIndex ? 'true' : undefined}
                className={`shrink-0 overflow-hidden transition-opacity ${
                  i === imageIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" aria-hidden="true" className="h-16 w-16 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-stagger px-6 py-10 lg:px-16 lg:py-20 lg:max-w-xl">
          {product.label && product.label !== 'SALE' && (
            <p className="text-[11px] font-bold uppercase tracking-display text-clover">
              {product.label}
            </p>
          )}
          <h2
            id={titleId}
            className="mt-2 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.92] tracking-tightest text-ink"
          >
            {product.name}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-display text-ink/65">
            {product.subcategory}
          </p>
          <p className="mt-6 font-serif text-3xl tabular-nums">
            {product.originalPrice != null && (
              <span className="mr-2 text-xl text-ink/55 line-through">
                ${product.originalPrice}
              </span>
            )}
            ${product.price}
            <span className="ml-2 text-xs font-sans font-normal text-ink/65">USD</span>
          </p>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/80">
            {product.description}
          </p>

          {product.colors?.length > 0 && (
            <fieldset className="mt-10 hairline-t pt-6">
              <legend className="mb-3 text-[11px] font-bold uppercase tracking-display">
                Color <span className="ml-1 font-medium text-ink/65">· {selectedColor}</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    aria-label={`Color ${c}`}
                    aria-pressed={c === selectedColor}
                    className={`h-9 w-9 rounded-full transition-all active:scale-90 ${
                      c === selectedColor
                        ? 'ring-1 ring-clover ring-offset-2 ring-offset-paper'
                        : 'ring-1 ring-ink/20 hover:ring-ink/50'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </fieldset>
          )}

          {product.sizes?.length > 0 && (
            <fieldset className="mt-8">
              <legend className="mb-3 text-[11px] font-bold uppercase tracking-display">
                Talle
                {selectedSize && <span className="ml-1 font-medium text-ink/65">· {selectedSize}</span>}
              </legend>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    aria-pressed={s === selectedSize}
                    className={`min-w-[3rem] border px-4 py-2.5 text-sm font-medium uppercase tracking-wide transition-all active:scale-95 ${
                      s === selectedSize
                        ? 'border-ink bg-ink text-paper'
                        : 'border-ink/20 hover:border-ink text-ink/75 hover:text-ink'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          <button
            type="button"
            className="mt-12 flex w-full items-center justify-center gap-2 bg-ink py-4 text-xs font-bold uppercase tracking-display text-paper transition-all active:scale-95 hover:bg-clover"
          >
            Agregar al carrito
            <ArrowRightIcon size={14} aria-hidden="true" />
          </button>
          <p className="mt-3 text-center text-[11px] uppercase tracking-display text-ink/65">
            O consultanos por WhatsApp para reservar
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 hairline-t pt-6 text-[11px] uppercase tracking-display">
            <div>
              <dt className="font-bold text-ink">Envío</dt>
              <dd className="mt-0.5 font-normal text-ink/70">2-5 días hábiles</dd>
            </div>
            <div>
              <dt className="font-bold text-ink">Pago</dt>
              <dd className="mt-0.5 font-normal text-ink/70">MercadoPago</dd>
            </div>
            <div>
              <dt className="font-bold text-ink">Cambios</dt>
              <dd className="mt-0.5 font-normal text-ink/70">30 días</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
