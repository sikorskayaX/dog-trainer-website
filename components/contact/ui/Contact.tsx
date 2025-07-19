"use client";

import { RequestForm } from "@/components/requestForm/ui/RequestForm";
import { ContactInfo } from "./ContactInfo";


export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Свяжитесь со мной
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готовы начать обучение вашего питомца? Запишитесь на консультацию
            или задайте любые вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <RequestForm />
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2025 Алина. Профессиональная дрессировка и передержка собак в
            Мариуполе 🐕
          </p>
        </div>
      </div>
    </section>
  );
};
