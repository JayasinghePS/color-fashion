"use client";

import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-full relative flex flex-col items-start gap-[12px] text-left font-sans text-[18px] text-[var(--color-text-heading)]">
      {icon && (
        <div className="self-stretch h-[30px] max-w-full overflow-hidden flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="self-stretch flex flex-col items-start gap-[8px]">
        <div className="self-stretch flex items-center">
          <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-semibold h-[24px]">
            {title}
          </div>
        </div>
        <div className="self-stretch flex items-center text-[14px] text-[var(--color-text-body)]">
          <div className="w-full relative tracking-[-0.01em] leading-[14px] inline-block flex-shrink-0">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
