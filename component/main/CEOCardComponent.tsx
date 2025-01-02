import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function CEOCard() {
  return (
    <section className="my-20">
      <div className="max-w-4xl mx-auto card shadow-lg shadow-primary">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-10">
            <div className="size-full">
              <Image
                src="/assets/images/ceo.jpg"
                alt="One of Nigeria top engineers, Engineer Okigwe Amos Ekene"
                width={1000}
                height={500}
                className="h-[400px] w-full object-cover object-center"
              />
              <div className="mt-4 flex justify-center gap-5 items-center">
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline btn-accent btn-sm"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline btn-accent btn-sm"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline btn-accent btn-sm"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline btn-accent btn-sm"><FontAwesomeIcon icon={faInstagram} /></a>


              </div>
            </div>
            <div className="size-full px-2">
              <div>
                <h2 className="text-4xl font-extrabold">
                  Engr. Okigwe E. Amos
                </h2>
                <p className="text-sm font-semibold">
                  Chief Executive Officer / Founder
                </p>
                <br />
                <p className="">
                  I am <strong>Engr. Amos Ekene</strong>, a first-class Civil Engineering
                  graduate from the University of Nigeria, Nsukka, Class of
                  2015.  I have been actively involved in diverse
                  projects across the <strong>construction</strong>, <strong>engineering</strong>, and <strong>real estate </strong> 
                   sectors, delivering exceptional results.
                </p>
                <br />
                <p className="">
                  With a passion for innovation and quality, I combine technical
                  expertise with industry insights to create structures that
                  inspire and serve. My work reflects a commitment to excellence
                  and client satisfaction, ensuring every project stands out.
                </p>
                <div className="mt-7 md:mt-5 flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-accent">
                    <FontAwesomeIcon icon={faPhone} /> Make a call
                  </button>
                  <button className="btn btn-secondary text-base-100">
                    <FontAwesomeIcon icon={faCalendarAlt} /> Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CEOCard;
