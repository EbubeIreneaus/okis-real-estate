import AppointmentForm from "@/component/form/AppointmentForm";
import ContactForm from "@/component/form/ContactForm";
import GrowingAgentsSection from "@/component/main/GrowingAgentsSection";
import MiniHeroSection from "@/component/main/MiniHeroSection";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <MiniHeroSection crumbs={["Home", "Contact"]} title="Contact Us" />
      <div className="py-10">
        <div>
          <div className="grid xl:grid-cols-3 grid-col-1 gap-3 items-center">
            <div className="col-span-1" data-aos="fade-up">
              <AppointmentForm />
            </div>
            <div className="lg:col-span-2 col-span-1" data-aos="fade-up">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-10 ring-1 ring-accent mx-2 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.680226045898!2d3.4084562104667464!3d6.422587673063379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf534819e766b%3A0x7bc15b3e76a620e2!2sBWC%20Hotels%20Victoria%20Island%20Lagos!5e0!3m2!1sen!2sng!4v1735740536468!5m2!1sen!2sng"
            className="w-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <GrowingAgentsSection />
    </>
  );
}
