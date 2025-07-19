"use client";

import { boardingServices } from "../consts";

export const BoardingServicesList = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white mb-12 text-center">
        Передержка собак
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {boardingServices.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-700 to-slate-700 p-8 rounded-2xl shadow-xl border border-gray-600"
          >
            <h4 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h4>
            <p className="text-gray-300 mb-6">{service.description}</p>

            {service.features && (
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-gray-300 text-sm"
                  >
                    <i className="ri-check-line text-amber-400 mr-2 mt-0.5"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-3">
              {service.pricing.map((price, priceIndex) => (
                <div
                  key={priceIndex}
                  className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20"
                >
                  <p className="text-white text-sm font-medium">
                    {price.category}
                  </p>
                  <p className="text-amber-300 font-semibold">{price.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
