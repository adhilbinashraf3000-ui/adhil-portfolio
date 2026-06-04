const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'CV', href: '#cv' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        <a href="#home" className="text-base font-black tracking-tight text-white focus:outline-none focus:ring-4 focus:ring-orange-300">Adhil.</a>
        <div className="flex gap-3 sm:gap-5">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-2 py-1 text-xs font-semibold text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 sm:text-sm">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
