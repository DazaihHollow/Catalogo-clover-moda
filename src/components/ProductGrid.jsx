import ProductCard from './ProductCard';
import Reveal from './Reveal';

const ProductGrid = ({ products, onOpen }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-20 text-center">
        <p className="font-serif text-2xl italic text-ink">Sin stock en esta categoría</p>
        <p className="text-xs uppercase tracking-display text-ink/50">
          Probá con otra categoría
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
      {products.map((p, i) => (
        <Reveal key={p.id} delay={Math.min(i, 8) * 70}>
          <ProductCard product={p} index={i} onOpen={onOpen} />
        </Reveal>
      ))}
    </div>
  );
};

export default ProductGrid;
