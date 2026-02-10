"use client";

import React from "react";
import PrimaryButton from "./PrimaryButton";

import { HugeiconsIcon } from '@hugeicons/react';
import { LinkSquare02Icon } from '@hugeicons/core-free-icons';

interface ServicesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ 
  imageSrc, 
  title, 
  description, 
  buttonText = "Order Now", 
  buttonIcon,
  onButtonClick 
}) => {
  return (
    // <div className="w-full xl:w-[387px] sm:w-[calc(50%-10px)] relative shadow-[var(--shadow-card)] rounded-[var(--radius-md)] flex flex-col items-start text-left font-sans text-[20px] xs:w-FULL xs:items-center text-[var(--color-text-heading)]">
    <div className="w-full min-[430px]:w-[calc(50%-10px)] xl:w-[387px] xl:w-[calc(33.33%-14px)] relative shadow-[var(--shadow-card)] rounded-[var(--radius-md)] flex flex-col items-start text-left font-sans text-[20px] items-center text-[var(--color-text-heading)]">
      <img 
        className="self-stretch h-[100%] rounded-t-[var(--radius-md)] max-w-full overflow-hidden flex-shrink-0 object-cover max-h-[288px]" 
        alt={title} 
        src={imageSrc} 
      />
      <div className="self-stretch rounded-b-[var(--radius-md)] bg-[var(--color-bg-default)] flex flex-col items-start p-[20px] gap-[12px]">
        <div className="self-stretch flex flex-col items-start gap-[8px]">
          <div className="self-stretch flex items-center">
            <div className="flex-1 relative tracking-[-0.02em] leading-[20px] font-medium">
              {title}
            </div>
          </div>
          <div className="self-stretch flex items-center text-[14px] text-[var(--color-text-body)]">
            <div className="flex-1 relative tracking-[-0.01em] leading-[14px]">
              {description}
            </div>
          </div>
        </div>
        <PrimaryButton 
          text={buttonText} 
          icon={<HugeiconsIcon icon={LinkSquare02Icon} />} 
          onClick={onButtonClick} 
        />
      </div>
    </div>
  );
};

export default ServicesCard;
