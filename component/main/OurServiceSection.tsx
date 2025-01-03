import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PropertyTypeSection() {
  return (
    <section className="py-24 px-5 w-full overflow-hidden">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">What We Offer</h2>
        <br />
        <p className="text-center max-w-xl w-full mx-auto" data-aos="fade-up" data-aos-delay="100" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque
          aspernatur voluptas blanditiis non. Odit harum nobis sunt illum
          voluptatibus.
        </p>
      </div>
      <div>
        <div className="max-w-4xl w-full mx-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-right" >
              <Image
                src="/assets/images/icons/apartment.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Apartment Rentals
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-4">
                Explore a wide range of affordable and luxurious apartments for
                rent. Whether you&apos;re looking for a cozy studio or a
                spacious family home, we have options to match your needs.
              </p>
              <Link
                href="/properties?p=appartment"
                className="btn bg-gradient-to-r from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Browse Appartment{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>

            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-up">
              <Image
                src="/assets/images/icons/property.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Property Sales
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-7">
                Looking to buy or sell property? Our team provides expert
                guidance to ensure seamless transactions, connecting buyers and
                sellers with the best opportunities.
              </p>
              <Link
                href="/contact"
                className="btn bg-gradient-to-tr from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Contact Us{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>

            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-left">
              <Image
                src="/assets/images/icons/management.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Property Management
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-7">
                Leave the hassle of managing your property to us. We handle
                tenant screening, maintenance, and rental collection, so you can
                relax and enjoy the returns.
              </p>
              <Link
                href="/contact"
                className="btn bg-gradient-to-tr from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Contact Us{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>

            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-right">
              <Image
                src="/assets/images/icons/land.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Land Acquisition
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-5">
                Discover prime plots of land for residential, commercial, or
                investment purposes. Let us help you secure the perfect location
                for your vision
              </p>
              <Link
                href="/properties?p=land"
                className="btn bg-gradient-to-tr from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Get Started{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>

            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-up">
              <Image
                src="/assets/images/icons/estate.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Real Estate Consultation
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-9">
                Get professional advice on property investments, market trends,
                and the best opportunities tailored to your goals.
              </p>
              <Link
                href="/properties#appointment"
                className="btn bg-gradient-to-tr from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Book Appoitment{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>

            <article className="shadow-sm shadow-primary rounded text-center py-5 max-w-xl" data-aos="fade-left">
              <Image
                src="/assets/images/icons/construction.png"
                alt="Image icon indicating apartment rentals"
                width={80}
                height={80}
                className="mx-auto border p-2 rounded-full mb-3"
              />
              <h3 className="text-secondary text-xl font-bold mb-2">
                Building Construction
              </h3>
              <p className="text-sm text-balance font-medium font-serif mb-4">
                 Our expert team ensures quality craftsmanship, timely
                delivery, and innovative designs for residential, commercial,
                and industrial projects.
              </p>
              <Link
                href="/contact"
                className="btn bg-gradient-to-tr from-secondary to-primary rounded-sm text-base-100 px-5"
              >
                Contact Us{" "}
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
