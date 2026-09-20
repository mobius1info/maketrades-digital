import { useEffect, useRef, useState } from 'react';
import { LineChart, Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Возможности', href: '#benefits' },
  { label: 'Платформа', href: '#platform' },
  { label: 'Как это работает', href: '#how' },
  { label: 'Статьи', href: '#articles' },
];

const TARGET = 'https://maketrades.shop/';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = () => window.open(TARGET, '_blank', 'noopener,noreferrer');

  return (
    <header
      ref={barRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-700/50 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
            <LineChart className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Broker<span className="text-emerald-400">Launch</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={TARGET}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Войти в кабинет
          </a>
          <button onClick={go} className="btn-primary">
            Запустить брокера
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-ink-100 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ink-700/50 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-ink-200 transition-colors hover:bg-ink-800 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={TARGET}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full"
              >
                Войти в кабинет
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  go();
                }}
                className="btn-primary w-full"
              >
                Запустить брокера
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
