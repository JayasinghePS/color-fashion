"use client";

import React from "react";

interface ContactCardProps {
  label: string;
  text: string;
  icon?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ label, text, icon }) => {
  return (
    <div className="w-full relative flex items-center gap-[12px] text-left font-sans text-[16px] text-[var(--color-text-heading)]">
      {icon && (
        // <div className="h-[48px] w-[48px] rounded-full flex-shrink-0 overflow-hidden">
        //   {icon}
        // </div>
         <div className="h-[48px] w-[48px] rounded-full flex-shrink-0 bg-[var(--color-icon-bg)] border-[1px] border-[var(--color-icon-stroke)] flex items-center justify-center">
            {icon}
        </div>
      )}
      <div className="flex flex-col items-start justify-center gap-[8px]">
        <div className="self-stretch flex items-center">
          <div className="relative tracking-[-0.01em] leading-[16px] font-medium">
            {label}
          </div>
        </div>
        <div className="self-stretch flex items-center text-[var(--color-text-body)]">
          <div className="relative tracking-[-0.01em] leading-[16px]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
