"use client";

import { achievements, certificates } from "../consts";


export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Мой путь в кинологии
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            Профессиональное развитие
          </h3>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mr-4">
                      <i
                        className={achievement.icon + " text-white text-xl"}
                      ></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-amber-400 font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            Специализированные сертификаты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-slate-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-amber-500/30 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mb-4">
                  <i className={`${cert.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {cert.name}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Постоянное развитие</h3>
            <p className="max-w-3xl mx-auto">
              Я продолжаю изучать новые методики дрессировки и совершенствовать
              свои навыки, чтобы предоставлять самые эффективные услуги для
              ваших питомцев. Каждая собака особенная, и я нахожу индивидуальный
              подход к каждому четвероногому ученику.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
