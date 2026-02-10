"use client";

import React from "react";

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Placeholder icons for others since Figma code reused facebook icon or empty
const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.96039 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.521 8.13205 14.3411 8.54601 14.9912 9.19616C15.6414 9.84631 16.0553 10.6664 16.1874 11.5574" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const Footer = () => {
  return (
    <div className="w-full bg-[var(--color-bg-footer)]">
      <div className="layout-container flex flex-col items-start justify-center py-[32px] pb-[24px] xl:pt-[64px] xl:pb-[24px] font-sans text-left text-[12px] text-[rgba(0,0,0,0.7)]">
        <div className="w-full flex flex-col items-center justify-center gap-[32px]">
          {/* Top Bar */}
          <div className="self-stretch flex items-center justify-between gap-[20px]">
            <img className="h-[44px] w-[44px] xl:h-[52px] xl:w-[52px] object-cover" alt="Logo" src="/logo.png" />
            
            <div className="flex items-center gap-[12px]">
               {/* Social Icons */}
               <div className="h-[44px] w-[44px] xl:h-[48px] xl:w-[48px] rounded-full bg-[var(--color-icon-bg)] border-[1px] border-[var(--color-icon-stroke)] flex items-center justify-center text-[var(--color-text-heading)] hover:text-[var(--color-primary)] cursor-pointer transition-colors">
                  <FacebookIcon />
               </div>
               <div className="h-[44px] w-[44px] xl:h-[48px] xl:w-[48px] rounded-full bg-[var(--color-icon-bg)] border-[1px] border-[var(--color-icon-stroke)] flex items-center justify-center text-[var(--color-text-heading)] hover:text-[var(--color-primary)] cursor-pointer transition-colors">
                   <InstagramIcon />
               </div>
               <div className="h-[44px] w-[44px] xl:h-[48px] xl:w-[48px] rounded-full bg-[var(--color-icon-bg)] border-[1px] border-[var(--color-icon-stroke)] flex items-center justify-center text-[var(--color-text-heading)] hover:text-[var(--color-primary)] cursor-pointer transition-colors">
                  <LinkedInIcon />
               </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="self-stretch xl:w-full flex flex-col xl:flex-row items-center xl:justify-between gap-[12px] xl:gap-[20px]">
            <div className="w-[339px] text-center xl:text-left relative tracking-[-0.01em] leading-[12px] xl:leading-[16px] flex-shrink-0">
              © 2025 Color Fashion Industrial (Pvt) Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center gap-[12px]">
              <div className="relative tracking-[-0.01em] leading-[12px] xl:leading-[16px]">
                Design & Develop by
              </div>
              <img className="w-[86px] h-auto object-cover" alt="NexGen Logo" src="/nexgen logo.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
