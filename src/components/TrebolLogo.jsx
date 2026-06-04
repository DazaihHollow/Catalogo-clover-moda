const TrebolLogo = ({ size = 24, className = '', title = 'Clover Moda' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    <path d="M16 1.5c0 4.5 1.5 7.5 4 9.5-2.5 0-4 2.5-4 5 0-2.5-1.5-5-4-5 2.5-2 4-5 4-9.5z" />
    <path d="M30.5 16c-4.5 0-7.5 1.5-9.5 4 0-2.5-2.5-4-5-4 2.5 0 5-1.5 5-4 2 2.5 5 4 9.5 4z" />
    <path d="M16 30.5c0-4.5-1.5-7.5-4-9.5 2.5 0 4-2.5 4-5 0 2.5 1.5 5 4 5-2.5 2-4 5-4 9.5z" />
    <path d="M1.5 16c4.5 0 7.5-1.5 9.5-4 0 2.5 2.5 4 5 4-2.5 0-5 1.5-5 4-2-2.5-5-4-9.5-4z" />
  </svg>
);

export default TrebolLogo;
