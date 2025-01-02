"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const Reviews = [
  {
    name: "Emeka Okafor",
    rating: 5,
    review:
      "I am extremely pleased with the property I purchased. The process was seamless, and the location is perfect for my family.",
    image: "review001.jpg",
  },
  {
    name: "Ngozi Adebanjo",
    rating: 4,
    review:
      "The renovation of my home was handled professionally, with great attention to detail. I’m very happy with the result.",
    image: "review002.jpg",
  },
  {
    name: "Chinedu Onwugbufor",
    rating: 5,
    review:
      "Buying land through this company was a great decision. Everything was transparent and stress-free.",
    image: "review003.jpg",
  },
  {
    name: "Aisha Bello",
    rating: 5,
    review:
      "My house construction project was handled expertly, and the quality of work exceeded my expectations!",
    image: "review004.jpg",
  },
  {
    name: "Tunde Alabi",
    rating: 5,
    review:
      "Fantastic service! The property is exactly as described, and the environment is serene and secure.",
    image: "review005.jpg",
  },
  {
    name: "Funke Ogundele",
    rating: 4,
    review:
      "The renovation of my home was done beautifully, though there was a slight delay. Overall, I’m very satisfied.",
    image: "review006.jpg",
  },
  {
    name: "Gbenga Afolayan",
    rating: 5,
    review:
      "The company helped me purchase a home, and the entire process was stress-free. Highly recommended!",
    image: "review007.jpg",
  },
];

function CustomerReviewSection() {
  return (
    <section className="py-20">
      <div>
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
            Customer Review
          </h2>
          <br />
          <p
            className="text-center max-w-xl w-full mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            neque aspernatur voluptas blanditiis non. Odit harum nobis sunt
            illum voluptatibus.
          </p>
        </div>

        <div className="py-10 px-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop
            autoplay
            modules={[Autoplay]}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10
              }
            }}
           className=""
          >
            {Reviews.map((review) => (
              <SwiperSlide key={review.name} className="px-5 w-fit">
                <div className="px-10">
                  <div>
                    <Image
                      src={`/assets/images/review/${review.image}`}
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full !h-[100px] !w-[100px] object-cover object-top"
                    />
                  </div>
                  <h2 className="text-lg font-bold my-5">{review.name}</h2>
                  <p>{review.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
