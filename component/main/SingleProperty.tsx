import { PropertyType } from "@/types/PropertyType";
import Image from "next/image";
import React from "react";
import { Naira } from "@/lib/naira";
import { faRulerCombined, faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SingleProperty({
  property,
}: {
  property: PropertyType;
}) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="shadow rounded property ">
        <div className="relative h-[250px] overflow-hidden">
        <Image
          src={`/assets/images/properties/${property.image}`}
          alt=""
          width={1000}
          height={500}
          className="h-[250px] w-full object-cover object-center rounded image transition-all ease-linear duration-300"
        />
        <button className="btn btn-xs absolute top-0 left-0 px-5 btn-secondary text-white rounded-sm rounded-tl">
            {property.forSale ? 'Sale': 'Rent'}
        </button>
        <button className="btn bg-base-100 btn-ghost absolute bottom-0 left-2 px-5 rounded-none rounded-t btn-xs capitalize">
            {property.property}
        </button>
        </div>
        <div className="p-5 ">
            <p className="text-xl font-extrabold text-secondary underline underline-offset-8 "><strong>{Naira(property.amount || 0)}</strong></p>
            <p className="text-sm my-3"><strong>{property.location}</strong></p>
            <h3 className="capitalize font-extrabold text-2xl">{property.state}, Nigeria</h3>
            <div className="flex items-center justify-evenly mt-3 mb-5">
                <span><FontAwesomeIcon icon={faRulerCombined} className="text-secondary" /> {property.squareFt}</span>
                <span><FontAwesomeIcon icon={faBed} className="text-secondary" /> {property.beds || 0}</span>
                <span><FontAwesomeIcon icon={faBath} className="text-secondary" /> {property.bathroom || 0}</span>
            </div>
            <Link href={'/listing/'+property.id} className="btn btn-outline btn-accent px-10" >see details</Link>
        </div>
      </div>
    </div>
  );
}
