"use client";

import { trainingServices } from "../consts";

export const TrainingServicesList = () => {
  return (

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Дрессировка
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-600"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl mr-4">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {service.title}
                    </h4>
                    <div className="flex items-center mt-1">
                      <i className="ri-map-pin-line text-amber-400 text-sm mr-1"></i>
                      <span className="text-amber-400 text-sm">
                        {service.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <i className="ri-check-line text-amber-400 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                  <p className="text-amber-300 font-semibold text-center">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

  );
};
