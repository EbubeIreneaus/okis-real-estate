"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { AOSRefresh } from "@/lib/aos";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {

    return (
        <div className="h-dvh w-full heroo">
            <div className="h-full">
                <div className="size-full ">
                    <Swiper
                        slidesPerView={1}
                        modules={[Autoplay, Pagination]}
                        pagination
                        autoplay={{ delay: 5000 }}
                        speed={700}
                        loop
                        observer
                        onSlideChange={() => {
                            AOSRefresh()
                        }}
                        className="size-full"
                    >
                        <SwiperSlide className="size-full swiper relative" id="swiper1" >
                            <Image
                                src="/assets/images/bg/bg-1.webp"
                                alt=""
                                width={1000}
                                height={1000}
                                className="size-full object-cover object-bottom"
                            />
                            <div className="absolute z-40 size-full top-0 left-0 text-base-100" data-aos="fade-up" data-aos-anchor="#swiper1">
                                <div className="max-w-2xl size-full flex items-center md:px-10">
                                    <div className="px-5">
                                        <h1
                                            className="text-5xl font-bold capitalize"
                                            data-aos="fade-up"
                                        >
                                            Find a{" "}
                                            <strong className="text-slate-500 font-bold ">
                                                {" "}
                                                perfect home{" "}
                                            </strong>{" "}
                                            to live with your family
                                        </h1>
                                        <br />
                                        <p
                                            className="font-medium"
                                            data-aos="fade-right"
                                            data-aos-delay="100"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nobis, ipsum numquam tempore suscipit qui non praesentium
                                            soluta magni corporis aut.
                                        </p>
                                        <button
                                            className="btn btn-accent px-10 mt-10 rounded-sm hover:btn-secondary"
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                        >
                                            Get Started{" "}
                                            <FontAwesomeIcon icon={faArrowRight} beatFade />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper relative">
                            <Image
                                src="/assets/images/bg/bg-3.webp"
                                alt=""
                                width={1000}
                                height={1000}
                                className="size-full object-cover object-bottom"
                            />
                            <div className="absolute z-40 size-full top-0 left-0 text-base-100">
                                <div className="max-w-2xl size-full flex items-center md:px-10">
                                    <div className="px-5">
                                        <h1
                                            className="text-5xl font-bold capitalize"
                                            data-aos="fade-up"
                                        >
                                            Plan Your{" "}
                                            <strong className="text-secondary font-bold">
                                                {" "}
                                                House{" "}
                                            </strong>{" "}
                                            With Top{" "}
                                            <strong className="text-secondary font-bold">
                                                {" "}
                                                Engineers
                                            </strong>{" "}
                                            in Nigeria{" "}
                                        </h1>
                                        <br />
                                        <p className="font-medium" data-aos="fade-right">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nobis, ipsum numquam tempore suscipit qui non praesentium
                                            soluta magni corporis aut.
                                        </p>
                                        <button
                                            className="btn btn-secondary px-10 mt-10 rounded-sm text-white hover:btn-accent"
                                            data-aos="fade-up"
                                        >
                                            Book Appointment{" "}
                                            <FontAwesomeIcon icon={faArrowRight} beatFade />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper relative">
                            <Image
                                src="/assets/images/bg/bg-2.webp"
                                alt=""
                                width={1000}
                                height={1000}
                                className="size-full object-cover object-center"
                            />
                            <div className="absolute z-40 size-full top-0 left-0 text-base-100">
                                <div className="max-w-2xl size-full flex items-center md:px-10">
                                    <div className="px-5">
                                        <h1
                                            className="text-5xl font-bold capitalize"
                                            data-aos="fade-up"
                                        >
                                            Find Affordable{" "}
                                            <strong className="text-slate-500 font-bold">
                                                {" "}
                                                Office Space
                                            </strong>{" "}
                                            And{" "}
                                            <strong className="text-secondary font-bold">
                                                {" "}
                                                Appartment{" "}
                                            </strong>{" "}
                                            in Nigeria{" "}
                                        </h1>
                                        <br />
                                        <p className="font-medium" data-aos="fade-right">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nobis, ipsum numquam tempore suscipit qui non praesentium
                                            soluta magni corporis aut.
                                        </p>
                                        <button
                                            className="btn bg-gradient-to-r from-secondary to-primary px-10 mt-10  hover:opacity-80 border-0 rounded-sm text-white"
                                            data-aos="fade-up"
                                        >
                                            Book Appointment{" "}
                                            <FontAwesomeIcon icon={faArrowRight} beatFade />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
