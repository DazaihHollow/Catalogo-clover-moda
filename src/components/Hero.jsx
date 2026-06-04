const HERO_IMAGE =
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80&auto=format&fit=crop';

const Hero = () => (
  <section id="top" className="px-6 pt-10 pb-16 lg:px-12 lg:pt-20 lg:pb-32">
    <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="relative lg:col-span-5">
        <p className="hero-line hero-d-1 mb-6 text-[11px] font-bold uppercase tracking-display text-ink/70">
          N° 04 <span className="mx-2 text-clover">/</span> Spring / Summer 2026
        </p>
        <h1 className="hero-line hero-d-2 font-serif text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.88] tracking-tightest text-ink">
          Unfiltered
          <br />
          <span className="italic">Style.</span>
        </h1>
        <p className="hero-line hero-d-3 mt-8 max-w-sm text-base leading-relaxed text-ink/80">
          The new drop is here. Sixteen pieces, cut clean, built to last. In stock until it isn&apos;t.
        </p>
        <div className="hero-line hero-d-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#catalog"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-display text-ink border-b-2 border-ink pb-1 transition-colors active:scale-95 hover:text-clover hover:border-clover"
          >
            Shop the drop
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#editorial"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-display text-ink/70 transition-colors hover:text-clover"
          >
            View editorial
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="relative lg:col-span-7">
        <div className="hero-img hero-d-img relative aspect-[1/1] overflow-hidden bg-surface-dim lg:aspect-[3/2]">
          <img
            src={HERO_IMAGE}
            alt="Modelo luciendo el trench del Drop 04 / Spring Summer 2026, campaña editorial Clover Moda"
            width="1400"
            height="933"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
        <span
          aria-hidden="true"
          className="hero-mark hero-d-mark pointer-events-none absolute -top-4 -right-2 font-serif italic text-clover text-[clamp(5rem,14vw,9rem)] leading-none select-none lg:-top-8 lg:-right-4"
        >
          04
        </span>
        <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-display text-ink/65">
          <span>Editorial N° 12</span>
          <span>Photographed in Buenos Aires</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
