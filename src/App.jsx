import { useMemo, useState } from 'react';
import EditorialBlock from './components/EditorialBlock';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBlocks from './components/InfoBlocks';
import ProductDetail from './components/ProductDetail';
import ProductGrid from './components/ProductGrid';
import Reveal from './components/Reveal';
import StructuredData from './components/StructuredData';
import products from './data/products.json';

const FEATURED_ID = 'cm-001';

const categoryLabel = (slug) => {
  switch (slug) {
    case 'all': return 'Catálogo completo';
    case 'mujer': return 'Mujer';
    case 'hombre': return 'Hombre';
    case 'ninos': return 'Niños';
    case 'accesorios': return 'Accesorios';
    case 'sale': return 'Sale';
    default: return slug;
  }
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products;
    if (activeCategory === 'sale') return products.filter((p) => p.label === 'SALE');
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = useMemo(
    () => products.find((p) => p.id === FEATURED_ID) ?? products[0],
    []
  );

  const heading = categoryLabel(activeCategory);

  return (
    <>
      <StructuredData />
      <Header active={activeCategory} onChange={setActiveCategory} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section
          id="catalog"
          aria-labelledby="catalog-heading"
          className="px-6 py-16 lg:py-28"
        >
          <div className="hairline-t pt-8 lg:pt-12">
            <Reveal>
              <div className="mb-10 flex items-end justify-between gap-4 lg:mb-16">
                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-display text-clover">
                    N° 01 <span className="mx-2 text-ink/30">/</span> Catálogo
                  </p>
                  <h2
                    id="catalog-heading"
                    className="font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] tracking-tightest text-ink"
                  >
                    {heading}
                  </h2>
                </div>
                <p
                  aria-hidden="true"
                  className="shrink-0 pb-2 text-[11px] uppercase tracking-display text-ink/60 tabular-nums"
                >
                  {filtered.length} {filtered.length === 1 ? 'pieza' : 'piezas'}
                </p>
              </div>
            </Reveal>
            <ProductGrid products={filtered} onOpen={setSelected} />
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Mostrando {filtered.length} {filtered.length === 1 ? 'pieza' : 'piezas'} en {heading}.
          </p>
        </section>
        <EditorialBlock product={featured} onOpen={setSelected} />
        <InfoBlocks />
      </main>
      <Footer />
      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default App;
