import { ArrowUpRight, Gift } from 'lucide-react';

const TARGET = 'https://maketrades.shop/';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-12 text-center md:px-12 md:py-16">
          {/* glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gold-400/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 flex justify-center">
              <span className="section-eyebrow">
                <Gift className="h-3.5 w-3.5" />
                Персональные бонусы
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Готовы запустить
              <br />
              <span className="text-gradient-emerald">свой брокерский бизнес?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-300 sm:text-lg">
              Напишите нам — мы дадим персональные бонусы, поможем с настройкой
              платформы и проведём вас через каждый этап запуска.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={TARGET} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                Получить бонусы
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={TARGET} target="_blank" rel="noopener noreferrer" className="btn-gold w-full sm:w-auto">
                Запросить демо
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
