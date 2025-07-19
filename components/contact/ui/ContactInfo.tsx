"use client";

import { contactInfo } from "../consts";

export const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
      <div className="space-y-6 mb-12">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-amber-500/20 rounded-xl mr-4 border border-amber-500/30">
              <i className={`${info.icon} text-amber-400 text-xl`}></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300">{info.title}</h4>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  className="text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-white">{info.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
