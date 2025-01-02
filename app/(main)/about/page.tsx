import CEOCard from "@/component/main/CEOCardComponent";
import CounterComponent from "@/component/main/CounterComponent";
import GrowingAgentsSection from "@/component/main/GrowingAgentsSection";
import MiniHeroSection from "@/component/main/MiniHeroSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <MiniHeroSection crumbs={["Home", "About"]} title="About Us" />
      <div className="py-20 lg:px-16">
        <div>
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 items-center mb-20 overflow-hidden w-full">
            <div className="size-full" data-aos="fade-right">
              <Image
                src="/assets/images/construction.jpg"
                alt="okis real estate engineers on construction site"
                width={1000}
                height={1000}
                className="!w-full h-full object-cover object-center mask mask-hexagon"
              />
            </div>
            <div className="px-5">
              <h2 className="text-4xl font-extrabold" data-aos="fade-up">
                Building <strong>Construction</strong> /{" "}
                <strong>Renovation</strong>
              </h2>
              <br />
              <p data-aos="fade-up">
                At <strong>Oki&apos;s Real Estate</strong>, we are more than
                just a building and construction firm—we are a team of dedicated
                professionals passionate about turning your dreams into reality.
                With years of experience in the industry, we specialize in
                delivering high-quality construction projects that stand the
                test of time. From residential homes to commercial spaces, our
                mission is to provide innovative and cost-effective solutions
                that exceed expectations
              </p>
              <br />
              <p data-aos="fade-up">
                Our approach is rooted in collaboration, innovation, and
                integrity. We work closely with our clients to understand their
                unique needs, ensuring that every project reflects their vision
                and style. Whether it&apos;s <strong>constructing</strong> a
                family home, <strong>designing</strong> a modern office space,
                or developing large-scale <strong>infrastructure</strong>, our
                commitment to excellence and attention to detail set us apart
              </p>
              <br />
              <p data-aos="fade-up">
                Sustainability is at the core of everything we do. We prioritize
                eco-friendly practices and use materials that minimize
                environmental impact while maintaining the highest standards of
                quality. At <strong>Oki&apos;s Real Estate</strong>, we believe
                in building not just structures, but also trust and lasting
                relationships with our clients.
              </p>
              <br />
              <Link href="" className="btn btn-outline btn-accent px-10" data-aos="fade-up">
                See Top Engineers
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 items-center mb-20 w-full overflow-hidden">
            <div className="w-full px-5">
              <h2 className="text-4xl font-extrabold" data-aos="fade-left">
                Properties <strong>Sales</strong> / <strong>Renting</strong>
              </h2>
              <br />
              <p data-aos="fade-up">
                At <strong>Oki&apos;s Real Estate</strong>, we specialize in
                property sales and rentals, offering a diverse range of options
                tailored to meet your unique needs. Whether you&apos;re looking
                to buy your dream home, lease a{" "}
                <strong>modern apartment</strong>, or secure a commercial space,
                our dedicated team is here to make the process seamless and
                stress-free
              </p>
              <br />
              <p data-aos="fade-up">
                Our <strong>property sales</strong> service connects buyers with{" "}
                <strong>premium land</strong>,<strong>apartments</strong>, and{" "}
                <strong>office spaces</strong> in prime locations across
                Nigeria. We ensure every property in our portfolio is thoroughly
                vetted, providing you with the assurance of quality and
                legitimacy. From first-time buyers to seasoned investors, we
                offer expert guidance to help you make informed decisions.
              </p>
              <br />
              <p data-aos="fade-up">
                For those seeking flexible <strong>rental solutions</strong>, we
                provide an extensive selection of residential and commercial
                properties. Whether you&apos;re searching for a cozy apartment,
                a family-friendly home, or an office in the heart of the city,
                we have options to suit every lifestyle and budget.
              </p>
              <br />
              <p data-aos="fade-up">
                At <strong>Oki&apos;s Real Estate</strong>, we are committed to
                excellence, transparency, and customer satisfaction. Let us help
                you find the perfect property that meets your needs and exceeds
                your expectations.
              </p>
              <br />
              <Link data-aos="fade-up" href="" className="btn btn-outline btn-accent px-14">
                Contact Us
              </Link>
            </div>
            <div className="size-full">
              <Image
                src="/assets/images/appartment-rental.jpeg"
                alt="okis real estate engineers on construction site"
                width={1000}
                height={1000}
                className="!w-full h-full object-cover object-center mask mask-hexagon"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 w-full overflow-hidden items-center ">
            <div className="size-full">
              <Image
                src="/assets/images/estate-consult.jpeg"
                alt="okis real estate offering consultation service"
                width={1000}
                height={1000}
                className="!w-full h-full object-cover object-center mask mask-hexagon"
                data-aos="fade-right"
              />
            </div>
            <div className="px-5">
              <h2 className="text-4xl font-extrabold" data-aos="fade-left">
                <strong>Real Estate</strong> Consultation and{" "}
                <strong>Property</strong> Management
              </h2>
              <br />
              <p data-aos="fade-up">
                At <strong>Oki&apos;s Real Estate</strong>, we offer
                professional real estate consultation and property management
                services designed to provide clarity, convenience, and peace of
                mind. Whether you&apos;re buying, selling, renting, or managing
                a property, our team of experts is here to guide you every step
                of the way.
              </p>
              <br />
              <p data-aos="fade-up">
                Our real estate consultation services are tailored to help you
                navigate the complexities of the property market. From
                evaluating property values to analyzing market trends, we
                provide actionable insights that empower you to make informed
                decisions. Whether you&apos;re a first-time investor or a
                seasoned property owner, we simplify the process to ensure you
                maximize your returns.
              </p>
              <br />
              <p data-aos="fade-up">
                When it comes to property management, we take the hassle out of
                ownership. Our comprehensive services include tenant screening,
                lease management, property maintenance, and rent collection. We
                treat every property as if it were our own, ensuring it remains
                in excellent condition and generates steady income.
              </p>
              <br />
              <p data-aos="fade-up">
                With <strong>Oki&apos;s Real Estate</strong>, you can focus on
                what matters most while we handle the intricacies of real
                estate. Partner with us for reliable, professional, and
                results-driven services that elevate your property experience.
              </p>
              <br />
              <Link href="" data-aos="fade-up"  className="btn btn-outline btn-accent px-10">
                Book an Appointmet
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <CEOCard />
        <CounterComponent />
      </div>
      <div className="py-16 px-7">
        <div className="grid lg:grid-cols-3 gap-3">
          {/* mission */}
          <div className="card card-bordered" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title text-2xl">Mission</h2>
              <br />
              <p>
                To deliver innovative, high-quality, and sustainable
                construction, engineering, and real estate solutions that exceed
                client expectations while contributing to the development of
                communities.
              </p>
            </div>
          </div>

          {/* vission */}
          <div className="card card-bordered" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title text-2xl">Vision</h2>
              <br />
              <p>
                To be a leading force in the construction and real estate
                industries, known for excellence, integrity, and innovation in
                shaping the future of infrastructure and property development.
              </p>
            </div>
          </div>

          {/* values */}
          <div className="card card-bordered" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title text-2xl">Core Values</h2>
              <br />
              <div>
                <ul>
                  <li><b>Excellence</b>: Striving for the highest standards in every project.</li>
                  <li><b>Interity</b>:Upholding honesty and transparency in all dealings.</li>
                  <li><b>Innovation</b>: Embracing cutting-edge techniques and sustainable practices.</li>
                  <li><b>Customer Focus</b>: Building strong relationships and ensuring client satisfaction.</li>
                  <li><b>Teamwork</b>: Collaborating to achieve shared goals and deliver outstanding results.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GrowingAgentsSection />
    </>
  );
}

export default page;
