"use client"
import { Properties } from "@/lib/properties";
import { PropertyType } from "@/types/PropertyType";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SingleListingCarousel({
  property,
}: {
  property: PropertyType;
}) {
  const images: string[] = [];
  Properties.forEach((pr) => {
    if (pr.property == property.property && pr.id != property.id) {
      images.push(pr.image);
    }
  });
  return (
   <div className="max-w-full max-h-[400px] overflow-hidden mx-auto">
     <Swiper slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination={{clickable: true}}>
      <SwiperSlide>
        <Image
           src={`/assets/images/properties/${property.image}`}
          alt=""
          width={1000}
          height={1000}
          className="object-cover !size-full"
        />
      </SwiperSlide>

      {images.map((img) => (
        <SwiperSlide key={img}>
          <Image
              src={`/assets/images/properties/${img}`}
            alt=""
            width={1000}
            height={1000}
            className="object-cover !size-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
}
