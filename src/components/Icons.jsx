const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const UserIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

export const BagIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 1 1 6 0v2" />
  </svg>
);

export const PlusIcon = (props) => (
  <svg {...base} strokeWidth={2.25} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const TruckIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M2 7h11v10H2zM13 10h5l3 3v4h-8" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const RotateIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <path d="M3 4v5h5" />
  </svg>
);
