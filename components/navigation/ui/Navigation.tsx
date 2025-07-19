"use client";

import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-pacifico">
            Кинолог в Мариуполе
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Образование
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              Контакты
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-white"
          >
            <i
              className={`ri-${isMenuOpen ? "close" : "menu"}-line text-xl`}
            ></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Образование
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
