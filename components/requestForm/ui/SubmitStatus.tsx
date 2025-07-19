import React from "react";
import classNames from "classnames";

interface SubmitStatusProps {
  status: "success" | "error" | null;
}

const SubmitStatus: React.FC<SubmitStatusProps> = ({ status }) => {
  if (status === null) {
    return null;
  }
  const statusClasses = classNames("px-4 py-3 rounded-xl", {
    "bg-green-500/20 border border-green-400/30 text-green-300":
      status === "success",
    "bg-red-500/20 border border-red-400/30 text-red-300": status === "error",
  });
  return (
    <div className={statusClasses}>
      {status === "success" ? (
        <p>
          Заявка успешно отправлена! Свяжусь с вами в ближайшее время для
          уточнения деталей.
        </p>
      ) : (
        <p>
          Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь по
          телефону/Telegram.
        </p>
      )}
    </div>
  );
};

export default SubmitStatus;
