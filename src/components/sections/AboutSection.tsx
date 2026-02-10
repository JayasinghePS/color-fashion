import React from "react";
import AboutCard from "../ui/AboutCard";

import { HugeiconsIcon } from '@hugeicons/react';
import { Award02Icon, Clock01Icon, FlashIcon } from '@hugeicons/core-free-icons';


const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FFA742" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#FFA742" strokeWidth="2" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="#FFA742" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="#FFA742" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="#FFA742" strokeWidth="2" />
  </svg>
);

const WhatsAppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21L4.9 15.4C3.6 13.1 3.6 10.3 4.9 8C6.6 4.9 10.4 3.6 13.6 5.1C16.8 6.6 18.2 10.4 16.9 13.6C15.6 16.8 11.8 18.2 8.6 16.9L3 21Z" stroke="#FFA742" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AboutSection = () => {
  return (
    <div className="w-full bg-[var(--color-bg-alt)]">
      <div className="layout-container flex flex-col items-center justify-center py-[48px] xl:py-[64px] gap-[48px] xl:gap-[64px] font-sans text-left text-[var(--color-text-heading)]">
        
        {/* Title Section */}
        <div className="self-stretch flex flex-col xl:flex-row xl:items-center xl:justify-between gap-[24px] xl:gap-[20px]">
          <div className="relative tracking-[-0.03em] leading-[32px] text-[32px] xl:leading-[64px] xl:text-[60px] font-medium xl:w-[526px] xl:flex-shrink-0">
            <span>About<br/></span>
            <span className="text-[var(--color-primary)]">Color Fashion <br className="xl:hidden"/>Industrial (Pvt) Ltd</span>
          </div>
          
          <div className="relative text-[14px] xl:text-[16px] leading-[14px] xl:leading-[24px] tracking-[-0.01em] text-[var(--color-text-body)] xl:w-[590px]">
            <span className="font-medium text-[var(--color-text-heading)]">Color Fashion Industrial (Pvt) Ltd</span>
            <span>
              {" "}is a leading custom printing and apparel solutions provider in Sri Lanka. We specialize in manufacturing high-quality jerseys, office wear, promotional products, and corporate merchandise tailored to meet the unique needs of our clients.
              <br/><br/>
              With years of industry experience, our team combines modern printing technology with skilled craftsmanship to ensure vibrant colors, durable finishes, and exceptional product quality. We take pride in delivering reliable service, competitive pricing, and on-time production for businesses, events, sports teams, and organizations across the country.
              <br/><br/>
              Every order is handled with care—from design to final delivery—ensuring your brand is represented with professionalism and precision.
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="self-stretch flex flex-col xl:flex-row items-center justify-center gap-[32px] xl:gap-[20px]">
          <AboutCard 
            title="Fast Turnaround Times" 
            description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
            icon={<HugeiconsIcon icon={Award02Icon} color="var(--color-primary)" />}
          />
          <AboutCard 
            title="Exceptional Quality" 
            description="Stay ahead of your schedule with a built-in calendar that syncs across all your devices and reminds you what's next."
            icon={<HugeiconsIcon icon={Clock01Icon} color="var(--color-primary)" />}
          />
          <AboutCard 
            title="WhatsApp-First Service" 
            description="Eliminate distractions with a minimalist interface and time-blocking tools that help you get in deep work mode."
            icon={<HugeiconsIcon icon={FlashIcon} color="var(--color-primary)" />}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
