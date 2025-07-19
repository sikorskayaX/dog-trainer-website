"use client";

import { useState } from "react";
import axios from "axios";
import { serviceOptions, locationOptions, weightOptions } from "../consts";
import { InputField } from "./InputField";
import { FormSelect } from "./FormSelect";
import { useForm } from "react-hook-form";
import SubmitStatus from "./SubmitStatus";

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

interface FormData {
  name: string;
  tg: string;
  dogName: string;
  dogSize: string;
  service: string;
  location: string;
}

export const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const onSubmit = async (data: FormData) => {
    try {
      // Формируем сообщение для Telegram
      const message = `Новая заявка:
        Имя: ${data.name}
        Tg: ${data.tg}
        Имя собаки: ${data.dogName}
        Размер собаки: ${data.dogSize}
        Услуга: ${data.service}
        Локация: ${data.location}`;

      const response = await axios.post(url, {
        chat_id: chatId,
        text: message,
      });

      if (response.status === 200) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения в Telegram:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Записаться на занятие</h3>
      <form
        id="alina-dog-training-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-[10px]">
          <InputField
            name="name"
            placeholder="Ваше имя"
            register={register}
            rules={{ required: true }}
          />

          <InputField name="tg" placeholder="Telegram" register={register} />
        </div>

        <div className="flex gap-[10px]">
          <InputField
            name="dogName"
            placeholder="Кличка собаки"
            register={register}
          />

          <FormSelect
            name="dogSize"
            register={register}
            options={weightOptions}
            placeholder="Размер собаки"
          />
        </div>

        <FormSelect
          name="service"
          register={register}
          groupedOptions={serviceOptions}
          placeholder="Выберите услугу"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
        >
          {isSubmitting ? "Отправка..." : "Записаться на занятие"}
        </button>

        <SubmitStatus status={submitStatus} />
      </form>
    </div>
  );
};
