import { BookOpen, Heart, Sparkles, Users, Zap, Star, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "С какого возраста принимаете детей?",
      answer:
        "Мы принимаем детей с 1,5 лет. Самая младшая — ясельная группа (Pre-Nursery group). Для каждого возраста разработана своя программа с учётом особенностей развития: от сенсорных игр для малышей до подготовки к школе для старших.",
    },
    {
      question: "Как устроена билингвальная программа?",
      answer:
        "День на русском — день на английском. Язык становится не предметом изучения, а естественной частью жизни ребёнка в саду. Дети слышат, говорят и играют на обоих языках, постепенно и без стресса осваивая билингвальную среду.",
    },
    {
      question: "Что такое концепция 5С?",
      answer:
        "Это авторская система, объединяющая пять направлений развития: Cognition (познание и мышление), Communication (речь и общение), Creativity (творчество и самовыражение), Cooperation (командная работа), Connection (физическое и эмоциональное развитие). Все пять направлений встроены в повседневную жизнь ребёнка органично и без перегрузки.",
    },
    {
      question: "Как проходит адаптация ребёнка в саду?",
      answer:
        "Мы уделяем особое внимание плавному входу в жизнь сада. Первые дни ребёнок может приходить на короткое время, постепенно привыкая к пространству, педагогам и другим детям. Наши специалисты поддерживают и ребёнка, и родителей на всех этапах адаптации.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/60 to-[#1A1A2E]/95" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="font-medium text-balance">Академия детства</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Программа", "Концепция 5С", "Группы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-[#1A1A2E] hover:bg-white/90 rounded-full px-6 font-semibold">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Билингвальная среда · Авторская концепция 5С</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Больше, чем детский сад.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Мы создаём билингвальную среду, в которой развитие происходит естественно: через игру, живое общение, исследование и взаимодействие с миром.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-[#1A1A2E] hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold">
              Записать ребёнка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о программе
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium">Принимаем детей от 1,5 лет</span>
          </div>
        </div>
      </div>

      {/* Features Section — 5C */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Авторская концепция 5С</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Пять направлений — одна гармоничная среда для роста вашего ребёнка</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {/* Cognition */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <BookOpen className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cognition</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Познание</p>
              <p className="text-white/80 leading-relaxed text-sm">Развитие мышления, внимания и любознательности</p>
            </div>

            {/* Communication */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Communication</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Коммуникация</p>
              <p className="text-white/80 leading-relaxed text-sm">Речь, умение общаться и договариваться</p>
            </div>

            {/* Creativity */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Creativity</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Творчество</p>
              <p className="text-white/80 leading-relaxed text-sm">Воображение и самовыражение</p>
            </div>

            {/* Cooperation */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Users className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cooperation</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Кооперация</p>
              <p className="text-white/80 leading-relaxed text-sm">Взаимодействие программ и командная работа</p>
            </div>

            {/* Connection */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Zap className="w-6 h-6 text-rose-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connection</h3>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Связь</p>
              <p className="text-white/80 leading-relaxed text-sm">Физическое и эмоциональное развитие</p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Наши группы</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Программа для каждого возраста — от ясельной до подготовительной группы
              </p>
            </div>

            {/* Groups Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                <div className="text-3xl font-bold text-white/40 mb-4">01.</div>
                <h3 className="text-lg font-semibold mb-1">Ясельная</h3>
                <p className="text-white/50 text-xs mb-4">Pre-Nursery group</p>
                <p className="text-white/80 leading-relaxed text-sm flex-1">
                  От 1,5 лет. Сенсорные игры, первые открытия, мягкое вхождение в мир сада.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                <div className="text-3xl font-bold text-white/40 mb-4">02.</div>
                <h3 className="text-lg font-semibold mb-1">Младшая</h3>
                <p className="text-white/50 text-xs mb-4">Nursery group</p>
                <p className="text-white/80 leading-relaxed text-sm flex-1">
                  Активное освоение мира через движение, игру и первые творческие проекты.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                <div className="text-3xl font-bold text-white/40 mb-4">03.</div>
                <h3 className="text-lg font-semibold mb-1">Средняя</h3>
                <p className="text-white/50 text-xs mb-4">Reception I group</p>
                <p className="text-white/80 leading-relaxed text-sm flex-1">
                  Развитие коммуникации, первые проекты в команде и уверенный билингвизм.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                <div className="text-3xl font-bold text-white/40 mb-4">04.</div>
                <h3 className="text-lg font-semibold mb-1">Старшая</h3>
                <p className="text-white/50 text-xs mb-4">Reception II group</p>
                <p className="text-white/80 leading-relaxed text-sm flex-1">
                  Углублённое познание, самостоятельность и раскрытие творческого потенциала.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                <div className="text-3xl font-bold text-white/40 mb-4">05.</div>
                <h3 className="text-lg font-semibold mb-1">Подготовительная</h3>
                <p className="text-white/50 text-xs mb-4">Preschool group</p>
                <p className="text-white/80 leading-relaxed text-sm flex-1">
                  Готовность к школе: логика, речь, уверенность в себе на двух языках.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-[#1A1A2E] hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Записать ребёнка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что важно знать родителям перед тем, как доверить нам самое ценное.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Запись в сад</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя родителя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Возраст ребёнка и вопрос
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Например: дочери 3 года, интересует средняя группа..."
                    />
                  </div>
                  <Button className="w-full bg-[#1A1A2E] text-white hover:bg-[#1A1A2E]/80 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Оставьте заявку, и мы свяжемся с вами, чтобы рассказать о программах, познакомить с пространством и ответить на все вопросы.
                  </p>
                </div>

                {/* Values Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <h4 className="text-lg font-semibold mb-4">Нам важно</h4>
                  <ul className="space-y-3">
                    {[
                      "Уважение к личности ребёнка",
                      "Безопасная билингвальная среда",
                      "Развитие через интерес",
                      "Баланс тела, ума и эмоций",
                      "Партнёрство с семьёй",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <Heart className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6">
                  <Button className="w-full bg-white text-[#1A1A2E] hover:bg-white/90 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-yellow-300" />
                  <span className="text-xl font-semibold">Академия детства</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Билингвальный детский сад с авторской концепцией 5С. Уверенное начало большого пути.
                </p>
              </div>

              {/* Programme Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОГРАММА</h3>
                <ul className="space-y-3">
                  {["Концепция 5С", "Билингвальная среда", "Расписание", "Галерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Ценности", "Партнёрство"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">РОДИТЕЛЯМ</h3>
                <ul className="space-y-3">
                  {["Запись в сад", "Вопросы и ответы", "Контакты", "Документы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-2">Новости Академии</h3>
                <p className="text-white/60 text-sm mb-4">Подпишитесь, чтобы первыми узнавать о событиях и открытых днях</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-[#1A1A2E] hover:bg-white/90 rounded-lg px-6 h-[50px] font-semibold">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Академия детства · Уверенное начало большого пути</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
