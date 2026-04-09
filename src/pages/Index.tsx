import { useState } from "react";
import Icon from "@/components/ui/icon";

const BEAVER_LOGO = "https://cdn.poehali.dev/projects/0992f4c7-8c57-46ee-abb0-01980be48a98/files/3f6e0dfd-baae-46fd-8e9f-d1fed49ad194.jpg";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Прайс", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const benefits = [
  {
    icon: "Flame",
    title: "Высокая теплоотдача",
    desc: "До 5000 ккал/кг — в 2 раза больше, чем у обычных дров. Топите меньше, греетесь больше.",
  },
  {
    icon: "Clock",
    title: "Долгое горение",
    desc: "Один брикет горит 3–4 часа без дозакладки. Идеально для ночного отопления.",
  },
  {
    icon: "Leaf",
    title: "Экологично",
    desc: "Производим из отходов деревообработки без добавления химии. Минимум золы и дыма.",
  },
  {
    icon: "Package",
    title: "Удобная упаковка",
    desc: "Брикеты в плёнке по 10 кг. Не пылят, не ломаются, удобно хранить и переносить.",
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    desc: "Доставим прямо во двор в течение 1–2 дней. От 1 паллеты — бесплатно.",
  },
  {
    icon: "BadgeCheck",
    title: "Гарантия качества",
    desc: "Работаем с 2015 года. Сертифицированное производство, постоянный контроль влажности.",
  },
];

const prices = [
  {
    name: "Розничный",
    qty: "1 упаковка",
    weight: "10 кг",
    price: "180",
    perkg: "18 ₽/кг",
    highlight: false,
    features: ["Древесные топливные брикеты", "Упаковка в плёнку", "Самовывоз или доставка"],
  },
  {
    name: "Популярный",
    qty: "1 поддон",
    weight: "500 кг",
    price: "16 500",
    perkg: "18 ₽/кг",
    highlight: true,
    features: ["Древесные брикеты", "Плёночная упаковка по 10 кг", "Бесплатная доставка"],
  },
];

const faqs = [
  {
    q: "Какой тип брикетов лучше для котла?",
    a: "Для котлов длительного горения лучше всего подходят RUF-брикеты (прямоугольные). Они плотнее, дольше горят и дают стабильное пламя. Для печей и каминов подойдут любые.",
  },
  {
    q: "Как хранить брикеты?",
    a: "В сухом, хорошо проветриваемом месте — сарай, гараж, навес. Не допускайте попадания влаги. В правильных условиях срок хранения неограничен.",
  },
  {
    q: "Из чего делают брикеты?",
    a: "Из отходов деревообработки: опилок, стружки, щепы. Прессуются под высоким давлением без клея и химии. Влажность — не более 8%.",
  },
  {
    q: "Есть ли доставка за город?",
    a: "Да, доставляем в радиусе 100 км от города. Стоимость доставки рассчитывается индивидуально. При заказе от 1 паллеты — доставка бесплатна в пределах 50 км.",
  },
  {
    q: "Можно ли заказать пробную партию?",
    a: "Конечно! Минимальный заказ — 1 упаковка 10 кг. Вы сможете оценить качество перед крупным заказом.",
  },
  {
    q: "Как быстро привезёте?",
    a: "В течение 1–2 рабочих дней после подтверждения заказа. При наличии на складе — в день заказа.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const text = `Заявка с сайта БобёрБрикет!\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
    const url = `https://t.me/+79221533387?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fdf6ee] font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-[#3d1f0a]/90 border-b border-orange-800/30">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <img src={BEAVER_LOGO} alt="Бобёр" className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
            <span className="font-display text-xl font-bold text-white tracking-wide">
              БОБЁР<span className="text-orange-400">БРИКЕТ</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-orange-100 hover:text-orange-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-display font-semibold tracking-wide transition-all hover:scale-105 text-sm"
            >
              Заказать
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#3d1f0a] border-t border-orange-800/30 px-4 pb-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-orange-100 hover:text-orange-400 transition-colors font-medium border-b border-orange-900/30"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-orange-500 text-white text-center px-5 py-3 rounded-lg font-display font-semibold tracking-wide"
            >
              Заказать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-bg pt-16 min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 text-orange-200 text-sm px-4 py-2 rounded-full mb-6 border border-orange-400/30">
              <Icon name="Flame" size={14} />
              Производитель топливных брикетов
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide">
              ТЕПЛО,<br />
              КОТОРОЕ<br />
              <span className="text-orange-400">РАБОТАЕТ</span>
            </h1>
            <p className="text-orange-100/80 text-lg mb-8 leading-relaxed max-w-md">
              Берёзовые топливные брикеты от производителя. Горят в 2 раза дольше дров, дают больше тепла и меньше золы.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#price"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-display font-bold tracking-wide text-lg transition-all hover:scale-105 shadow-lg shadow-orange-900/40"
              >
                Смотреть цены
              </a>
              <a
                href="#contacts"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-display font-bold tracking-wide text-lg transition-all"
              >
                Связаться
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {[["500+", "клиентов"], ["9 лет", "на рынке"], ["1 день", "доставка"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl font-bold text-orange-400">{num}</div>
                  <div className="text-orange-200/70 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-3xl scale-110" />
              <img
                src={BEAVER_LOGO}
                alt="Бобёр — наш талисман"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-orange-400/50 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl px-4 py-2 font-display font-bold shadow-lg">
                от 490 ₽/упак.
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#fdf6ee"/>
          </svg>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-[#fdf6ee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Почему выбирают нас</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3d1f0a] tracking-wide">
              ПРЕИМУЩЕСТВА
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group border border-orange-100"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={b.icon} size={22} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3d1f0a] mb-2 tracking-wide">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 bg-[#3d1f0a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Выгодные условия</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-wide">
              ПРАЙС-ЛИСТ
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {prices.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-orange-500 shadow-2xl shadow-orange-900/50 md:-mt-4 md:mb-4"
                    : "bg-white/10 border border-white/10 hover:bg-white/15"
                }`}
              >
                {p.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Выгоднее всего
                    </span>
                  </div>
                )}
                <div className={`font-display text-xs font-bold uppercase tracking-widest mb-1 ${p.highlight ? "text-orange-100" : "text-orange-400"}`}>
                  {p.name}
                </div>
                <div className="font-display text-3xl font-bold mb-1 text-white">
                  {p.price} ₽
                </div>
                <div className={`text-sm mb-1 ${p.highlight ? "text-orange-100" : "text-orange-300"}`}>
                  {p.qty} · {p.weight}
                </div>
                <div className={`text-xs mb-6 font-semibold ${p.highlight ? "text-orange-200" : "text-orange-400/80"}`}>
                  {p.perkg}
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="Check" size={14} className={p.highlight ? "text-orange-100" : "text-orange-400"} />
                      <span className={`text-sm ${p.highlight ? "text-orange-50" : "text-white/70"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`block text-center py-3 rounded-xl font-display font-bold tracking-wide transition-all hover:scale-105 ${
                    p.highlight
                      ? "bg-white text-orange-600 hover:bg-orange-50"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  Заказать
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-orange-300/60 text-sm mt-8">
            * Цены указаны с НДС. Возможен торг при крупных заказах.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#fdf6ee]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Вопросы и ответы</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3d1f0a] tracking-wide">
              FAQ
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-orange-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50/50 transition-colors"
                >
                  <span className="font-display font-semibold text-[#3d1f0a] tracking-wide pr-4">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-orange-500 shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-orange-100">
                    <div className="pt-4">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 hero-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">Мы на связи</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-wide">
              КОНТАКТЫ
            </h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (922) 153-33-87", href: "tel:+79221533387" },
                { icon: "MapPin", label: "Адрес", value: "г. Екатеринбург, ул. Волгоградская, д. 178", href: "#" },
              ].map(c => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-orange-500/30 border border-orange-400/30 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors shrink-0">
                    <Icon name={c.icon} size={20} className="text-orange-300 group-hover:text-white" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-orange-300/70 text-xs uppercase tracking-wide">{c.label}</div>
                    <div className="text-white font-semibold">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-6 tracking-wide">ОСТАВИТЬ ЗАЯВКУ</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-orange-200/50 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-orange-200/50 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <textarea
                  placeholder="Ваш вопрос или объём заказа"
                  rows={3}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-orange-200/50 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-display font-bold tracking-wide text-lg transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={20} />
                  Отправить в Telegram
                </button>
              </div>
              <p className="text-orange-200/50 text-xs mt-4 text-center">
                Откроется Telegram с готовым сообщением
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2a1308] py-8 border-t border-orange-900/30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={BEAVER_LOGO} alt="Бобёр" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-display font-bold text-white tracking-wide">
              БОБЁР<span className="text-orange-400">БРИКЕТ</span>
            </span>
          </div>
          <p className="text-orange-200/40 text-sm">© 2024 БобёрБрикет. Все права защищены.</p>
          <div className="flex gap-4">
            {navLinks.slice(0, 4).map(l => (
              <a key={l.href} href={l.href} className="text-orange-200/40 hover:text-orange-400 text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;