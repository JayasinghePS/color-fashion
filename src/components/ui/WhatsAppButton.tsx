"use client";

import React from "react";

interface WhatsAppButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-[40px] w-auto xl:w-auto flex items-center justify-center gap-[8px] px-[20px] py-[10px] rounded-[var(--radius-sm)] bg-[var(--color-whatsapp)] box-border text-left font-sans text-[16px] font-medium leading-[16px] tracking-[-0.01em] text-[var(--color-on-whatsapp)] hover:cursor-pointer hover:bg-[#1b872e] hover:leading-[18px] transition-all duration-200"
    >
      {icon && (
        <div className="h-[24px] w-[24px] relative flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="relative font-medium flex-shrink-0">
        {text}
      </div>
    </button>
  );
};

export default WhatsAppButton;
