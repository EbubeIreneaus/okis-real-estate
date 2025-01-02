import Image from "next/image";
import React from "react";

export default function MiniHeroSection({crumbs, title}: {crumbs: string[], title: string}) {
  return (
    <div className="relative h-[300px] overflow-hidden before:absolute before:z-10 before:left-0 before:top-0 before:size-full before:bg-black/60">
      <div className="size-full">
        <Image
          src="/assets/images/hero.jpg"
          alt=""
          width={1000}
          height={300}
          className="w-full h-[300px] object-cover object-top"
        />
        <div className="absolute z-30 left-0 top-0 size-full grid place-content-center text-base-100">
            <h1 className="text-3xl font-extrabold text-center uppercase">{title}</h1>
            <div className="breadcrumbs w-fit mx-auto">
                <ul>
                    {
                        crumbs.map(cb => <li key={cb}>{cb}</li>)
                    }
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
