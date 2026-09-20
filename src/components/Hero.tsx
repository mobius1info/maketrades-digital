import { ArrowUpRight, Play, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const TARGET = 'https://maketrades.shop/';

const stats = [
  { value: '4 нед.', label: 'средний срок запуска' },
  { value: '24/7', label: 'техническая поддержка' },
  { value: '100+', label: 'интеграций из коробки' },
];

const tickerItems = [
  'EUR/USD 1.0842 +0.12%',
  'GBP/USD 1.2715 -0.08%',
  'USD/JPY 149.83 +0.21%',
  'XAU/USD 2031.40 +0.45%',
  'BTC/USD 67250 +1.83%',
  'AUD/USD 0.6584 -0.15%',
  'USD/CHF 0.8821 +0.06%',
  'ETH/USD 3480 +2.14%',
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      {/* animated background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* ticker */}
      <div className="relative z-10 border-y border-ink-700/40 bg-ink-900/40 py-2.5 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-ticker gap-8 whitespace-nowrap pr-8">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-medium text-ink-300">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <span className="section-eyebrow">
              <Zap className="h-3.5 w-3.5" />
              White-label платформа для форекс-брокеров
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Запустите собственного
            <br />
            <span className="text-gradient-emerald">форекс-брокера</span>
            <br />
            за недели, а не годы
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Готовая технологическая платформа с торговым ядром, личным кабинетом,
            back office и CRM под вашим брендом. Полное техническое сопровождение
            и поддержка 24/7 — вы сосредоточены на бизнесе, а не на разработке.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={TARGET} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Запустить брокера
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={TARGET} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto">
              <Play className="h-4 w-4" />
              Запросить демо
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Без разработки с нуля. Без скрытых платежей.
          </div>
        </div>

        {/* stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="card-surface p-5 text-center md:p-6">
              <div className="font-display text-2xl font-bold text-emerald-400 md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-ink-400 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
