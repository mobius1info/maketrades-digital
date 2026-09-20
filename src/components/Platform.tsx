import { CandlestickChart, UserCog, Database, Users2, Plug, Globe, ArrowUpRight } from 'lucide-react';

const TARGET = 'https://maketrades.shop/';

const components = [
  {
    icon: CandlestickChart,
    title: 'Торговая платформа',
    text: 'Веб-терминал и мобильные приложения с графиками, ордерами, спредами. Поддержка всех типов ордеров и инструментов.',
    tags: ['Web', 'iOS', 'Android'],
  },
  {
    icon: UserCog,
    title: 'Личный кабинет клиента',
    text: 'Регистрация, верификация KYC, пополнение и вывод, торговая история, настройки счёта — всё в одном интерфейсе.',
    tags: ['KYC', 'Платежи', 'История'],
  },
  {
    icon: Database,
    title: 'Back office',
    text: 'Управление торговыми условиями, риск-менеджмент, финансовая отчётность, мониторинг счетов в реальном времени.',
    tags: ['Риски', 'Отчёты', 'Мониторинг'],
  },
  {
    icon: Users2,
    title: 'CRM для брокера',
    text: 'Воронка продаж, задачи менеджеров, карточка клиента с торговой активностью, тикет-система поддержки.',
    tags: ['Воронка', 'Тикеты', 'IB-программа'],
  },
  {
    icon: Plug,
    title: 'Платёжные интеграции',
    text: 'Карты, электронные кошельки, криптовалюта. Автоматическое зачисление и гибкие лимиты из коробки.',
    tags: ['Карты', 'Crypto', 'Кошельки'],
  },
  {
    icon: Globe,
    title: 'Мультиязычность',
    text: 'Интерфейс на десятках языков, локальные методы оплаты, настройка под региональные рынки и комплаенс.',
    tags: ['20+ языков', 'Локализация'],
  },
];

export default function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Компоненты платформы</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Единая инфраструктура
            <br />
            <span className="text-gradient-emerald">а не набор сервисов</span>
          </h2>
          <p className="mt-5 text-base text-ink-300 sm:text-lg">
            Шесть модулей, которые работают вместе и настраиваются под ваш бренд,
            роли сотрудников и бизнес-логику.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {components.map((c) => (
            <div
              key={c.title}
              className="card-surface group relative overflow-hidden p-6 hover:border-emerald-500/40 hover:bg-ink-800/60"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/5 transition-all duration-500 group-hover:bg-emerald-500/10" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-400">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {c.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-ink-600/60 bg-ink-900/40 px-2.5 py-1 text-xs font-medium text-ink-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={TARGET} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Посмотреть платформу в действии
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
