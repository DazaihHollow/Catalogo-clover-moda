import { RotateIcon, ShieldIcon, TruckIcon } from './Icons';

const blocks = [
  { num: '01', icon: TruckIcon, title: 'Envío gratis', body: 'A todo el país en compras +$120' },
  { num: '02', icon: ShieldIcon, title: 'Pago seguro', body: 'MercadoPago · 3 cuotas s/i' },
  { num: '03', icon: RotateIcon, title: 'Cambios', body: '30 días, sin preguntas' },
];

const InfoBlocks = () => (
  <section
    aria-labelledby="info-heading"
    className="hairline-t hairline-b px-6 py-16 lg:px-12 lg:py-24"
  >
    <h3 id="info-heading" className="sr-only">
      Beneficios de la tienda
    </h3>
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
      {blocks.map(({ num, icon: Icon, title, body }) => (
        <div key={title} className="flex items-start gap-5">
          <span
            aria-hidden="true"
            className="font-serif italic text-clover text-2xl leading-none shrink-0"
          >
            {num}
          </span>
          <div>
            <Icon size={22} aria-hidden="true" className="text-ink" />
            <h4 className="mt-3 text-sm font-bold uppercase tracking-display">{title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/70">{body}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InfoBlocks;
