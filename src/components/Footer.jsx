import { useId } from 'react';
import TrebolLogo from './TrebolLogo';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'TikTok', href: 'https://tiktok.com/' },
  { label: 'WhatsApp', href: 'https://wa.me/0000000000' },
];

const Footer = () => {
  const emailId = useId();

  return (
    <footer className="bg-ink text-paper px-6 py-16 lg:px-12 lg:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <TrebolLogo size={32} className="text-clover" aria-hidden="true" focusable="false" />
            <span className="font-serif text-3xl tracking-tightest">Clover Moda</span>
          </div>
          <p className="mt-6 max-w-md font-serif text-xl italic leading-snug text-paper/85">
            Moda editorial, mobile-first. Piezas curadas, producción honesta, cero logo gritón.
          </p>
          <form
            id="newsletter"
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex max-w-md items-center border-b-2 border-paper/40 pb-2 focus-within:border-clover transition-colors"
            aria-label="Suscripción al newsletter del drop"
          >
            <label htmlFor={emailId} className="sr-only">
              Email
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              placeholder="tu@email.com"
              required
              autoComplete="email"
              inputMode="email"
              className="flex-1 bg-transparent text-sm text-paper placeholder:text-paper/55 focus:outline-none"
            />
            <button
              type="submit"
              className="text-[11px] font-bold uppercase tracking-display text-paper transition-transform active:scale-95 hover:text-clover"
            >
              Suscribirme →
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 text-[11px] font-bold uppercase tracking-display text-paper/65">
            Tienda
          </h4>
          <address className="text-sm not-italic leading-relaxed text-paper/85">
            Av. Rivadavia 1234<br />
            CABA, Buenos Aires<br />
            Argentina
          </address>
          <a
            href="https://maps.google.com/?q=Av+Rivadavia+1234+CABA"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 bg-yellow-400 px-3 py-2 text-[11px] font-bold uppercase tracking-display text-ink transition-all active:scale-95 hover:bg-yellow-300"
          >
            <span>Ver en mapa</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 text-[11px] font-bold uppercase tracking-display text-paper/65">
            Horarios
          </h4>
          <p className="text-sm leading-relaxed text-paper/85">
            Lun a Vie · 10 a 20<br />
            Sáb · 10 a 14<br />
            Dom · Cerrado
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 text-[11px] font-bold uppercase tracking-display text-paper/65">
            Síguenos
          </h4>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-paper/85 transition-colors hover:text-clover"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 pt-6 lg:flex-row lg:items-baseline lg:justify-between">
        <p
          aria-hidden="true"
          className="font-serif text-5xl italic tracking-tightest text-clover lg:text-7xl"
        >
          04 / SS26
        </p>
        <div className="flex flex-col gap-1 text-[11px] uppercase tracking-display text-paper/60 lg:text-right">
          <p>© 2026 Clover Moda</p>
          <p>Hecho en Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
