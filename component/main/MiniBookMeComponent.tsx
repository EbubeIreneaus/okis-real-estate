import { faCalendarAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function MiniBookMeComponent() {
  return (
    <section className="my-20">
      <div className="max-w-4xl mx-auto card shadow-lg shadow-primary">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-10">
            <div className="size-full">
              <Image
                src="/assets/images/ekecy.jpg"
                alt="One of Nigeria top engineers, Engineer Okigwe Amos Ekene"
                width={1000}
                height={500}
                className="h-[400px] w-full object-cover object-center"
              />
            </div>
            <div className="size-full px-2">
              <div>
                <h2 className="text-4xl font-extrabold">
                  Contact With Our Certified Agent/Engineer
                </h2>
                <br />
                <p className="font-semibold">
                  Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                  vero ipsum sit sit diam justo sed vero dolor duo.
                </p>
                <div className="mt-7 md:mt-5 flex flex-col sm:flex-row gap-4">
                    <button className="btn btn-accent"><FontAwesomeIcon icon={faPhone} /> Make a call</button>
                    <button className="btn btn-secondary text-base-100"><FontAwesomeIcon icon={faCalendarAlt} /> Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniBookMeComponent;
