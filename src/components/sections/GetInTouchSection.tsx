"use client";

import React from "react";
import ContactCard from "../ui/ContactCard";

import { HugeiconsIcon } from '@hugeicons/react';
import { CallingIcon, Location01Icon, Mail01Icon, Clock01Icon} from '@hugeicons/core-free-icons';

const MapIcon = () => (
    // Placeholder map vector if image fails or just use the image
    <img className="w-full h-full object-cover" src="https://placehold.co/496x446" alt="Map Location" /> 
);


const GetInTouchSection = () => {
  return (
    <div className="w-full bg-[var(--color-bg-alt)]">
      <div className="layout-container flex flex-col items-center justify-center py-[48px] xl:py-[64px] gap-[32px] font-sans text-center text-[var(--color-text-heading)]">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-[12px]">
          <div className="relative tracking-[-2px] leading-[32px] xl:leading-[64px] text-[32px] xl:text-[60px] font-medium">
            <span>Get In </span>
            <span className="text-[var(--color-primary)]">Touch</span>
          </div>
          <div className="relative text-[14px] xl:text-[18px] leading-[14px] xl:leading-[28px] tracking-[-0.44px] text-[var(--color-text-body)] xl:w-[590px]">
            Ready to start your order? Reach out and we'll get back to you shortly.
          </div>
        </div>

        {/* Main Container */}
        <div className="self-stretch flex flex-col xl:flex-row items-center justify-center xl:justify-center  gap-[24px] xl:gap-[48px] text-left text-[16px]">
          {/* Map */}
        
               {/* <img className="w-full h-full object-cover rounded-[22px]" src="https://placehold.co/496x446" alt="Map" /> */}   
                    {/* Map */}
                    <div className="relative h-[230px] w-full max-w-[361px] overflow-hidden rounded-[22px] lg:h-[446px] lg:w-[496px] lg:max-w-none">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8207365690964!2d80.5294316!3d7.261232399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36b5e22cf1a87%3A0xf9d2c53bab57c11e!2zQ29sb3IgRmFzaGlvbiDgtprgtqngt5TgtpzgtrHgt4rgtrHgt4_gt4A!5e0!3m2!1sen!2slk!4v1764065459301!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>

          {/* Contact Details */}
          <div className="flex flex-col items-start gap-[32px] xl:gap-[50px] w-full xl:w-[452px]">
              <ContactCard 
                  label="Address"
                  text="301 C/ Kandy Road, Kadugannawa"
                  icon={<HugeiconsIcon icon={Location01Icon}  color="var(--color-primary)"/>}
              />
              <ContactCard 
                  label="Phone"
                  text="+94 76 089 2411"
                  icon={<HugeiconsIcon icon={CallingIcon} color="var(--color-primary)"/>}
              />
              <ContactCard 
                  label="Email"
                  text="colorfashion7@gmail.com"
                  icon={<HugeiconsIcon icon={Mail01Icon} color="var(--color-primary)"/>}
              />
               <div className="w-full relative flex items-start gap-[12px] text-left font-sans text-[16px] text-[var(--color-text-heading)]">
                  <div className="h-[48px] w-[48px] rounded-full flex-shrink-0 bg-[var(--color-icon-bg)] border-[1px] border-[var(--color-icon-stroke)] flex items-center justify-center">
                      <HugeiconsIcon icon={Clock01Icon} color="var(--color-primary)"/>
                  </div>
                  <div className="flex flex-col items-start gap-[8px]">
                      <div className="self-stretch flex items-center">
                          <div className="relative tracking-[-0.01em] leading-[16px] font-medium">
                              Opening Hours
                          </div>
                      </div>
                      <div className="flex flex-col items-start gap-[8px] text-[var(--color-text-body)] tracking-[-0.01em] leading-[16px]">
                          <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                          <div>Saturday: 9:00 AM - 2:00 PM</div>
                          <div>Sunday: Closed</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
