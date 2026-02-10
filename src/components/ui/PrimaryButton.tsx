"use client";

import React from "react";

interface PrimaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-[40px] w-auto xl:w-auto flex items-center justify-center gap-[8px] px-[20px] py-[10px] rounded-[var(--radius-sm)] border-[1.5px] border-[var(--color-primary)] bg-transparent box-border text-left font-sans text-[16px] font-medium leading-[16px] tracking-[-0.01em] text-[var(--color-text-heading)] hover:cursor-pointer hover:bg-[var(--color-primary)]  hover:leading-[18px] transition-all duration-200"
    >
      <div className="relative font-medium flex-shrink-0">
        {text}
      </div>
      {icon && (
        <div className="h-[24px] w-[24px] relative flex-shrink-0">
          {icon}
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;
