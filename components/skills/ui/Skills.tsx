"use client";

import { BoardingServicesList } from "./BoardingServicesList";
import { TrainingServicesList } from "./TrainingServicesList";
export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Мои услуги
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Профессиональные услуги дрессировки, передержки и коррекции
            поведения собак в Мариуполе
          </p>
        </div>

        <TrainingServicesList />
        <BoardingServicesList />

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Важная информация</h3>
            <p className="max-w-3xl mx-auto mb-6">
              Время занятий может изменяться в зависимости от индивидуальных
              особенностей собаки. Все услуги оказываются с профессиональным
              подходом и заботой о вашем питомце.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-amber-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold whitespace-nowrap cursor-pointer"
            >
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
