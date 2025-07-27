"use client";

import { useState } from "react";
import axios from "axios";
import { serviceOptions, weightOptions, contactOptions } from "../consts";
import { InputField } from "./InputField";
import { FormSelect } from "./FormSelect";
import { useController, useForm } from "react-hook-form";
import SubmitStatus from "./SubmitStatus";
import { TgInputField } from "./TgInputField";
import { PhoneInput } from "./PhoneInput";
import { SubmitButton } from "./SubmitButton";

const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

interface FormData {
  name: string;
  tg?: string;
  phoneNumber?: string;
  dogName: string;
  dogSize: string;
  service: string;
  contactWith: string;
}

export const RequestForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<FormData>();

  const { field: phoneField } = useController({
    name: "phoneNumber",
    control,
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const contactMethod = watch("contactWith");
  const onSubmit = async (data: FormData) => {
    try {
      // Формируем сообщение для Telegram
      const message = `Новая заявка:
        Имя: ${data.name}
        Способ связи: ${data.contactWith}
        Tелега: ${data.tg ? data.tg : "-"}
        Номер телефона: ${data.phoneNumber ? data.phoneNumber : "-"}
        Кличка собаки: ${data.dogName}
        Размер собаки: ${data.dogSize}
        Услуга: ${data.service}
        `;

      const response = await axios.post(url, {
        chat_id: process.env.CHAT_ID,
        text: message,
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        reset();
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
          <FormSelect
            name="contactWith"
            register={register}
            options={contactOptions}
            placeholder="Способ связи"
          />
          {contactMethod === "telegram" ? (
            <TgInputField
              name="tg"
              register={register}
              placeholder="@username"
            />
          ) : (
            <PhoneInput
              value={phoneField.value ? phoneField.value.slice(1) : ""}
              onChange={phoneField.onChange}
              disabled={!contactMethod}
            />
          )}
        </div>

        <div className="flex gap-[10px]">
          <InputField
            name="name"
            placeholder="Ваше имя"
            register={register}
            rules={{ required: true }}
          />
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
        {/* <div className="flex items-center">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent" className="ml-2">
            Я согласен на обработку моих персональных данных в соответствии с{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности
            </a>
          </label>
        </div> */}

        <SubmitButton isSubmitting={isSubmitting} />
        <SubmitStatus status={submitStatus} />
      </form>
    </div>
  );
};
