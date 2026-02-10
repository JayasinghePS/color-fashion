"use client";

import React, { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navItems = [
      { name: "Home", id: "hero-section" },
      { name: "About", id: "about-section" },
      { name: "Services", id: "services-section" }
  ];

  const handleScrollTo = (id: string, name: string) => {
      setActiveTab(name);
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div className="w-full bg-white shadow-[var(--shadow-header)] sticky top-0 z-50">
      <div className="layout-container flex items-center justify-between h-[78px] xl:h-[80px] font-sans text-left text-[16px] text-[var(--color-text-heading)]">
        {/* Logo */}
        <img
          className="h-[44px] w-[44px] xl:h-[52px] xl:w-[52px] relative object-cover"
          alt="Logo"
          src="/logo.png"
        />

        <div className="flex items-center gap-[20px] xl:gap-[12px] overflow-hidden">
          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-[12px]">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleScrollTo(item.id, item.name)}
                className="px-[12px] h-full flex items-center justify-center gap-[10px] cursor-pointer group"
              >
                <div
                  className={`
                    flex items-center justify-center gap-[10px] 
                    ${activeTab === item.name ? "border-b-[1px] border-[var(--color-primary)]" : ""}
                  `}
                >
                  <div
                    className={`
                      font-sans text-[16px] leading-[16px] break-words
                      ${
                        activeTab === item.name
                          ? "text-[var(--color-primary)] font-medium"
                          : "text-[var(--color-text-heading)] font-regular group-hover:text-[var(--color-primary)]"
                      }
                    `}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
               {/* Uses scrollTo for Contact Section */}
              <PrimaryButton 
                  text="Contact" 
                  icon={<HugeiconsIcon icon={ArrowUpRight01Icon} />} 
                  onClick={() => handleScrollTo("contact-section", "Contact")}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
