import React from "react";
import dogClub from "@/assets/dogClub.jpg";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            О себе
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={dogClub.src}
              alt="Алина проводит тренировки с собаками"
              className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Привет! Меня зовут Алина, и я дипломированный инструктор-кинолог 3
              категории. Мое профессиональное образование и дополнительные
              тренинги в области кинологии позволяют мне с уверенностью и
              страстью помогать вам и вашим питомцам достигать гармонии и
              взаимопонимания.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Моя специализация включает дрессировку всех уровней сложности,
              коррекцию поведения, социализацию и передержку собак. Работаю как
              с щенками, так и со взрослыми собаками всех пород.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Предлагаю индивидуальный подход к каждому питомцу, занятия в
              форматах: индивидуальные, с выездом к вам, в черте города
              Мариуполь, либо же на выбранной мною локации. Дрессировка на
              пансионе (с проживанием собаки у кинолога). Групповые занятия. Так
              же предлагаю услуги передержки с полным уходом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
