"use client";

import React from "react";
import ServicesCard from "../ui/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="layout-container flex flex-col items-center justify-center py-[48px] xl:py-[64px] gap-[32px] font-sans text-center text-[var(--color-text-heading)]">
        
        {/* Header */}
        <div className="self-stretch flex flex-col items-center gap-[12px] xl:w-[659px] xl:mx-auto">
          <div className="relative tracking-[-0.03em] leading-[32px] text-[32px] xl:text-[60px] xl:leading-[64px] font-medium">
            <span>Our </span>
            <span className="text-[var(--color-primary)]">Services & Products</span>
          </div>
          <div className="self-stretch xl:w-[590px] relative text-[14px] xl:text-[16px] tracking-[-0.01em] leading-[14px] xl:leading-[16px] text-[var(--color-text-body)]">
            Explore our wide range of custom printing services designed to meet all your branding and promotional needs
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full flex flex-row flex-wrap justify-center gap-[20px]">
          <ServicesCard 
            imageSrc="/Service 01.png"
            title="Customize T-Shirt Printing"
            description="High-quality custom T-shirt printing with vibrant colours, durable materials, and fully personalised designs for events, teams, brands, and promotions."
          />
          <ServicesCard 
            imageSrc="/Service 02.png"
            title="Wetlook Jerseys"
            description="Premium wetlook jerseys made with breathable fabric and sharp printing, ideal for sports teams and activewear branding."
          />
          <ServicesCard 
            imageSrc="/Service 03.png"
            title="Crocodile Office T-Shirts"
            description="Professional-grade office T-shirts made from crocodile fabric, perfect for corporate uniforms and promotional branding."
          />
          <ServicesCard 
            imageSrc="/Service 04.png"
            title="Bottoms, Shorts, Jackets & Flags"
            description="Custom bottoms, shorts, jackets, and flags with strong stitching, durable materials, and personalized prints for teams and organisations."
          />
          <ServicesCard 
            imageSrc="/Service 05.png"
            title="Wristbands & Mugs"
            description="Custom-printed wristbands and mugs with high-quality finishes—ideal for gifting, promotions, and events."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
