"use client";
import React, { useState } from "react";
import SingleProperty from "./SingleProperty";
import {Properties} from '@/lib/properties'

export default function PropertyListingSection() {
  const [listBy, setListBy] = useState("all");
  return (
    <section>
      <div className="mb-10 flex flex-col gap-y-4 md:flex-row justify-between items-center w-full px-10">
        <h2 className="text-4xl font-extrabold">Property Listing</h2>
        <div className="flex gap-5">
          <button
            className={`btn btn-outline btn-sm ${
              listBy == "all" ? "btn-secondary" : "btn-primary"
            }`}
            onClick={() => setListBy("all")}
          >
            All
          </button>
          <button
            className={`btn btn-outline btn-sm ${
              listBy == "sale" ? "btn-secondary" : "btn-primary"
            }`}
            onClick={() => setListBy("sale")}
          >
            For Sale
          </button>
          <button
            className={`btn btn-outline btn-sm ${
              listBy == "rent" ? "btn-secondary" : "btn-primary"
            }`}
            onClick={() => setListBy("rent")}
          >
            For Rent
          </button>
        </div>
      </div>

      <div>
        <div className="max-w-5xl w-fit mx-auto px-3">
           <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
           {
                Properties.map(property => (
                    <SingleProperty property={property} key={property.id} />
                ))
            }
           </div>
        </div>
      </div>
    </section>
  );
}
