import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];
    return (
      <aside className="flex flex-col items-center py-4 border-b border-[rgba(255,255,255,0.1)]">
        <h1 className="text-2xl font-bold text-[var(--Secondary)]">RecoMind</h1>
        <nav className="flex items-center flex-col gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--Accent)] border-b-2 border-[var(--Accent)] pb-1"
                      : "text-[var(--font_primary)] hover:text-[var(--Accent)] transition-colors"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
  )
}
