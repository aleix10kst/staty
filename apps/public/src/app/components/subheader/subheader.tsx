import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SubheaderProps {}

const NAV_LINKS = [
  { text: 'Home', href: 'home' },
  { text: 'Plantilla', href: 'roster' },
  { text: 'Calendari', href: 'fixtures' },
  { text: 'Estadísitques', href: 'stats' },
];

export function Subheader(props: SubheaderProps) {
  return (
    <div className="flex items-center justify-center h-12 bg-white">
      <nav className="space-x-8">
        {NAV_LINKS.map((link, idx) => (
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              `text-gray-700  ${isActive ? 'font-semibold' : 'font-light'}`
            }
            key={idx}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Subheader;
