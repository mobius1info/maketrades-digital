import { LineChart, ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';

const TARGET = 'https://maketrades.shop/';

const navLinks = [
  { label: 'Возможности', href: '#benefits' },
  { label: 'Платформа', href: '#platform' },
  { label: 'Как это работает', href: '#how' },
  { label: 'Статьи', href: '#articles' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/50 bg-ink-950 py-14">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600">
                <LineChart className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Broker<span className="text-emerald-400">Launch</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Информационный ресурс о запуске форекс-брокерского бизнеса на
              готовой white-label платформе.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Навигация
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-300 transition-colors hover:text-emerald-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Статьи
            </h4>
            <ul className="mt-4 space-y-2.5">
              {articles.slice(0, 4).map((a) => (
                <li key={a.id}>
                  <a
                    href={`#article-${a.id}`}
                    className="text-sm text-ink-300 transition-colors hover:text-emerald-300 line-clamp-1"
                  >
                    {a.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Запуск
            </h4>
            <p className="mt-4 text-sm text-ink-400">
              Запросите демо-аккаунт и получите персональные бонусы для запуска.
            </p>
            <a
              href={TARGET}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full"
            >
              Запустить брокера
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700/50 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} BrokerLaunch. Информационный проект.
          </p>
          <p className="text-xs text-ink-500">
            Мы не брокер. Технологическая платформа:{' '}
            <a
              href={TARGET}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 transition-colors hover:text-emerald-300"
            >
              maketrades.shop
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
