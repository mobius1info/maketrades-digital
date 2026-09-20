import { useEffect, useRef, useState } from 'react';
import {
  Rocket,
  Layers,
  Scale,
  CreditCard,
  Settings,
  Megaphone,
  ChevronDown,
  Clock,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';
import { articles, type Article } from '@/data/articles';

const TARGET = 'https://maketrades.shop/';

const iconMap: Record<string, typeof Rocket> = {
  Rocket,
  Layers,
  Scale,
  CreditCard,
  Settings,
  Megaphone,
};

export default function Articles() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openArticle = (id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => {
      const el = document.getElementById(`article-${id}`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  };

  // Listen for hash changes and custom events to open articles via in-page links
  useEffect(() => {
    const hashHandler = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article-')) {
        const id = hash.replace('#article-', '');
        openArticle(id);
      }
    };
    const eventHandler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      openArticle(id);
    };
    hashHandler();
    window.addEventListener('hashchange', hashHandler);
    window.addEventListener('open-article', eventHandler);
    return () => {
      window.removeEventListener('hashchange', hashHandler);
      window.removeEventListener('open-article', eventHandler);
    };
  }, []);

  const getRelated = (a: Article) =>
    a.related.map((rid) => articles.find((x) => x.id === rid)).filter(Boolean) as Article[];

  return (
    <section id="articles" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <BookOpen className="h-3.5 w-3.5" />
            База знаний
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Полезные статьи
            <br />
            <span className="text-gradient-emerald">о запуске брокера</span>
          </h2>
          <p className="mt-5 text-base text-ink-300 sm:text-lg">
            Шесть подробных материалов о каждом этапе создания брокерской
            компании — от бизнес-модели до маркетинга.
          </p>
        </div>

        {/* Article cards grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const Icon = iconMap[a.icon] ?? BookOpen;
            const isOpen = openId === a.id;
            return (
              <article
                key={a.id}
                id={`article-${a.id}`}
                className={`card-surface flex flex-col overflow-hidden ${
                  isOpen ? 'lg:col-span-3 md:col-span-2 border-emerald-500/40 bg-ink-800/60' : ''
                }`}
              >
                {/* Card header / collapsed view */}
                <button
                  onClick={() => toggle(a.id)}
                  className="group flex flex-1 flex-col p-6 text-left"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-md border border-ink-600/60 bg-ink-900/40 px-2.5 py-1 text-xs font-medium text-ink-400">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-300">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-ink-400">
                      <Clock className="h-3.5 w-3.5" />
                      {a.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      {isOpen ? 'Свернуть' : 'Читать'}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </div>
                </button>

                {/* Expanded article content */}
                {isOpen && (
                  <div className="animate-fade-in border-t border-ink-700/60 px-6 pb-6 pt-5">
                    <div className="prose-custom max-w-none">
                      {a.content.map((para, i) => (
                        <p key={i} className="mb-4 text-sm leading-relaxed text-ink-200 sm:text-[15px]">
                          {renderParagraph(para, a)}
                        </p>
                      ))}
                    </div>

                    {/* Related articles */}
                    <div className="mt-6 rounded-xl border border-ink-700/50 bg-ink-900/40 p-5">
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
                        <ArrowRight className="h-3.5 w-3.5" />
                        Похожие статьи
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {getRelated(a).map((r) => (
                          <button
                            key={r.id}
                            onClick={() => openArticle(r.id)}
                            className="rounded-lg border border-ink-600/60 bg-ink-800/40 px-3 py-2 text-xs font-medium text-ink-200 transition-all hover:border-emerald-500/40 hover:text-emerald-300"
                          >
                            {r.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={TARGET}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto"
                      >
                        Запросить демо
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={TARGET}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost w-full sm:w-auto"
                      >
                        Узнать больше
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Renders paragraphs with inline links to related articles
function renderParagraph(text: string, currentArticle: Article) {
  // Find references to other article titles and convert them to clickable links
  const related = articles.filter(
    (a) => a.id !== currentArticle.id && text.includes(`«${a.title}»`)
  );

  if (related.length === 0) return text;

  // Split by the first related title found and build segments
  const parts: (string | { link: Article })[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = -1;
    let earliestArticle: Article | null = null;

    for (const r of related) {
      const idx = remaining.indexOf(`«${r.title}»`);
      if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
        earliestIndex = idx;
        earliestArticle = r;
      }
    }

    if (earliestIndex === -1 || !earliestArticle) {
      parts.push(remaining);
      break;
    }

    if (earliestIndex > 0) parts.push(remaining.slice(0, earliestIndex));
    parts.push({ link: earliestArticle });
    remaining = remaining.slice(earliestIndex + `«${earliestArticle.title}»`.length);
  }

  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>;
    return (
      <button
        key={i}
        onClick={() => {
          const el = document.getElementById(`article-${part.link.id}`);
          if (el) {
            setOpenIdExternal(part.link.id);
            const top = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }}
        className="article-link font-medium"
      >
        «{part.link.title}»
      </button>
    );
  });
}

// Helper to open articles from inline links (uses a custom event)
function setOpenIdExternal(id: string) {
  const event = new CustomEvent('open-article', { detail: id });
  window.dispatchEvent(event);
}
