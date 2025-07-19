export const serviceOptions = [
  {
    label: "Дрессировка",
    options: [
      { value: "okd", label: "Общий курс дрессировки (ОКД)" },
      { value: "ugs", label: "Управляемая городская собака (УГС)" },
      { value: "nkd", label: "Начальный курс дрессировки (НКД)" },
      { value: "behavior", label: "Коррекция поведения" },
      { value: "socialization", label: "Социализация" },
    ],
  },
  {
    label: "Передержка",
    options: [
      { value: "boarding", label: "Передержка" },
      { value: "boarding-unteached", label: "Передержка неприученных собак" },
      { value: "boarding-training", label: "Пансион с дрессировкой" },
    ],
  },
  {
    label: "Консультация",
    options: [
      { value: "consultation", label: "Консультация" },
      { value: "online-consultation", label: "Онлайн консультация" },
    ],
  },
];

export const locationOptions = [
  { value: "instructor", label: "На территории инструктора (500₽/час)" },
  { value: "client", label: "Выезд к клиенту в Мариуполе (1000₽/час)" },
  { value: "online", label: "Онлайн консультация" },
];
export const weightOptions = [
  { value: "littleDog", label: "Маленькая собака до 20кг" },
  { value: "bigDog", label: "Большая собака более 20кг" },
];
