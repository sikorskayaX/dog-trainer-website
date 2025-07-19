"use client";


import alinaWithDober from "@/assets/alinaWithDober.jpg";

export const Hero=()=> {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Привет! Я
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Алина
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Дипломированный кинолог-инструктор 3 категории. Дрессировка,
              передержка и коррекция поведения собак
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Записаться на занятие
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-800 transition-all whitespace-nowrap cursor-pointer"
              >
                Узнать больше
              </button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a
                href="https://t.me/kinologmrpl"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <i className="ri-telegram-fill text-2xl"></i>
              </a>
              <a
                href="mailto:alinnasalamowa@yandex.kz"
                className="w-12 h-12 flex items-center justify-center text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <i className="ri-mail-fill text-2xl"></i>
              </a>
              <a
                href="tel:+79498991570"
                className="w-12 h-12 flex items-center justify-center text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <i className="ri-phone-fill text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl absolute -top-20 -right-20"></div>
              <img
                src={alinaWithDober.src}
                alt="Алина - Профессиональный кинолог"
                className="relative z-10 w-80 h-80 object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
