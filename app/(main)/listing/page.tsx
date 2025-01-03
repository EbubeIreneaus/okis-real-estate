import MiniHeroSection from "@/component/main/MiniHeroSection";
import SearchComponent from "@/component/main/SearchComponent";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Properties } from "@/lib/properties";
import SingleProperty from "@/component/main/SingleProperty";

export default function Listing() {
  const PTS = Properties;

  return (
    <>
      <MiniHeroSection
        crumbs={["Home", "Properties", "Listing"]}
        title="Properties"
      />
      <SearchComponent />

      <div>
        <div className="">
          <div className="lg:px-12 sm:px-5 px-2">
            <div>
              <div className=" border rounded-xl flex items-center justify-between my-10 md:px-10 px-3 py-2">
                <h4 className="badge px-5 badge-lg font-semibold ">
                  Found 21 Result
                </h4>
                <button className="btn btn-accent">
                  <FontAwesomeIcon icon={faSliders} />
                </button>
              </div>

              <div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-7 px-2">
                  {PTS.map((property) => (
                    <SingleProperty key={property.id} property={property} />
                  ))}
                </div>

                <div className="flex justify-center my-10">
                  <div className="join">
                    <button className="join-item btn ">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
