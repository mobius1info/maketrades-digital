import { Rocket, Users, Headphones, Palette, ShieldCheck, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Быстрый запуск',
    text: 'Торговое ядро, личный кабинет и back office уже готовы. Вы выходите на рынок за недели, а не годы разработки.',
  },
  {
    icon: Palette,
    title: 'Ваш собственный бренд',
    text: 'Платформа настраивается под ваш бренд: логотип, цвета, домен, торговые условия. Клиенты видят вашу компанию, а не вендора.',
  },
  {
    icon: Users,
    title: 'Полный технологический стек',
    text: 'Торговая платформа, CRM, back office, платёжные интеграции — всё в единой инфраструктуре, а не в разрозненных сервисах.',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    text: 'Круглосуточное техническое сопровождение. Обновления безопасности и новые функции без затрат на разработку.',
  },
  {
    icon: Wallet,
    title: 'Гибкая платёжная логика',
    text: 'Автоматическое зачисление, мультивалютность, партнёрские выплаты. Десятки платёжных шлюзов из коробки.',
  },
  {
    icon: ShieldCheck,
    title: 'Комплаенс из коробки',
    text: 'KYC, AML, верификация документов, segregation счетов. Стандартные процедуры, настроенные под требования регуляторов.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Почему white-label</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Всё для запуска брокера
            <br />
            <span className="text-gradient-emerald">в одном решении</span>
          </h2>
          <p className="mt-5 text-base text-ink-300 sm:text-lg">
            Шесть причин, почему новый брокер выбирает готовую платформу, а не
            разработку с нуля.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="card-surface group p-6 hover:border-emerald-500/40 hover:bg-ink-800/60"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
