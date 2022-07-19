import React from "react";

type IButtonProps = {
  className?: string;
  type: "PRIMARY" | "SECONDARY" | "TERTIARY";
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<IButtonProps> = ({
  className = "",
  type,
  label,
  onClick,
}) => {
  return (
    <button
      className={`md:px-6 md:py-4 px-3 py-2 ${
        type === "PRIMARY" ? "bg-gradient" : "bg-white"
      } rounded-xl text-primary md:text-base text-sm font-extrabold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
