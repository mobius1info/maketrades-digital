import { ClipboardList, FileCheck, Wrench, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Бизнес-модель',
    text: 'Определяем тип брокера (STP, ECN, market maker), целевые рынки, торговые условия и финансовую модель.',
  },
  {
    num: '02',
    icon: FileCheck,
    title: 'Юридическая схема',
    text: 'Подбираем юрисдикцию, помогаем с регистрацией компании и лицензией, настраиваем комплаенс-процедуры.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Настройка платформы',
    text: 'Адаптируем платформу под бренд, подключаем ликвидность и платёжные шлюзы, настраиваем роли и торговые условия.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Запуск',
    text: 'Тестируем, запускаем живую торговлю, подключаем маркетинг и партнёрскую сеть. Поддержка 24/7 с первого дня.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Как это работает</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Четыре шага
            <br />
            <span className="text-gradient-emerald">до живой торговли</span>
          </h2>
          <p className="mt-5 text-base text-ink-300 sm:text-lg">
            Понятная последовательность запуска с прозрачным объёмом работ и
            бюджета на каждом этапе.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="relative">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/30 bg-ink-900 shadow-lg shadow-emerald-500/10">
                  <s.icon className="h-10 w-10 text-emerald-400" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 font-display text-xs font-bold text-ink-950">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-5 text-center font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-center text-sm leading-relaxed text-ink-300">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
