import CategoryBar from './CategoryBar';
import TrebolLogo from './TrebolLogo';
import { BagIcon, SearchIcon, UserIcon } from './Icons';

const Header = ({ active, onChange }) => (
  <>
    <a href="#main-content" className="skip-link">
      Saltar al contenido principal
    </a>
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md">
      <div className="flex h-14 items-center lg:h-16">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 px-6 lg:px-8 transition-transform active:scale-95"
          aria-label="Clover Moda — inicio"
        >
          <TrebolLogo size={20} className="text-ink" aria-hidden="true" focusable="false" />
          <span className="text-sm font-bold uppercase tracking-editorial">Clover Moda</span>
        </a>
        <CategoryBar active={active} onChange={onChange} />
        <div className="ml-auto flex shrink-0 items-center gap-1 px-6 lg:px-8">
          <button
            type="button"
            aria-label="Buscar"
            className="flex h-11 w-11 items-center justify-center transition-transform active:scale-90"
          >
            <SearchIcon aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Perfil"
            className="hidden md:flex h-11 w-11 items-center justify-center transition-transform active:scale-90"
          >
            <UserIcon aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Bolsa, 2 productos"
            className="relative flex h-11 w-11 items-center justify-center transition-transform active:scale-90"
          >
            <BagIcon aria-hidden="true" />
            <span
              aria-hidden="true"
              className="absolute top-1 right-1 flex h-3.5 min-w-[0.875rem] items-center justify-center rounded-full bg-clover px-1 text-[9px] font-bold text-white"
            >
              2
            </span>
          </button>
        </div>
      </div>
      <div className="hairline-b" />
    </header>
  </>
);

export default Header;
