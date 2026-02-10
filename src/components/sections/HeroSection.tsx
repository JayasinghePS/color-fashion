"use client";

import React from "react";
import WhatsAppButton from "../ui/WhatsAppButton";
import PrimaryButton from "../ui/PrimaryButton";
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="layout-container flex flex-col items-center justify-center py-[48px] xl:py-[64px] gap-[24px] xl:gap-[32px] text-center font-sans text-[var(--color-text-heading)]">
        <div className="self-stretch flex flex-col items-center gap-[24px] xl:gap-[32px]">
          <div className="flex flex-col items-center gap-[12px] xl:gap-[24px]">
            <div className="relative font-semibold tracking-[-0.04em] leading-[40px] text-[40px] xl:text-[72px] xl:leading-[72px]">
              <span>Your Brand.</span>
              <span className="text-[var(--color-primary)]"> Your Design.<br /></span>
              <span>Our Quality Printing.</span>
            </div>
            <div className="relative font-medium tracking-[-0.02em] leading-[20px] text-[16px] xl:text-[24px] xl:leading-[24px] text-[var(--color-text-body)] max-w-[359px] xl:max-w-none">
              Premium custom printing for your jerseys, office wear, mugs, flags & more.
            </div>
          </div>
          
          <div className="flex flex-col xl:flex-row items-center justify-center xs:justify-center gap-[12px] w-full xl:w-auto">
            <div className="xl:w-auto">
              <WhatsAppButton 
                text="Start Order on WhatsApp" 
                icon={<HugeiconsIcon icon={WhatsappIcon} />} 
              />
            </div>
            <div className="xl:w-auto">
              <PrimaryButton 
                text="View Services" 
                icon={<HugeiconsIcon icon={ArrowUpRight01Icon} />} 
              />
            </div>
          </div>
        </div>

        <div className="self-stretch relative h-[174px] xl:h-[384px] w-full mt-[24px] xl:mt-[32px]">
          {/* Gradient Blur Background */}
          <div 
              className="absolute top-0 left-0 w-full h-full xl:left-0 xl:top-[33px] xl:w-[996px] xl:h-[318px] opacity-60 rounded-[16777200px] blur-[64px] xl:blur-[128px]"
              style={{
                  background: "linear-gradient(135deg, #FF8303 0%, #F9A902 50%, #FF6A01 100%)",
                  left: "50%",
                  transform: "translateX(-50%)"
              }}
          />
          {/* Product Image */}
          <img 
              className="absolute top-[14px] xl:top-0 left-1/2 -translate-x-1/2 w-[360px] h-[180px] xl:w-[770px] xl:h-[384px] object-cover rounded-[24px]"
              alt="Hero Product"
              src="/product image.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
