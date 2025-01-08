import MiniHeroSection from "@/component/main/MiniHeroSection";
import React, { Suspense } from "react";
import { Properties } from "@/lib/properties";
import SingleListingCarousel from "@/component/main/SingleListingCarousel";
import { PropertyType } from "@/types/PropertyType";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons/faBed";
import {
  faBathtub,
  faMap,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";

export default async function SingleProperty({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const propertyId = (await params).id;
  const property = Properties.find((pr) => pr.id == Number(propertyId));
  let title = "";
  if (property?.property == "apartment") {
    title = `${property.beds} Bedroom Appartment for ${
      property.forSale ? "Sale" : "Rent"
    }`;
  } else {
    title = `${property?.property} For ${property?.forSale ? "Sale" : "Rent"}`;
  }
  return (
    <div>
      <MiniHeroSection
        crumbs={["Property", "Listing", "Single"]}
        title={title}
      />
      <div className="md:px-10 px-5 py-10">
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-7">
          <Suspense
            fallback={
              <Image
                src={`/assets/images/properties/${property?.image}`}
                alt=""
                width={1000}
                height={1000}
              />
            }
          >
            <SingleListingCarousel
              property={property || ({} as PropertyType)}
            />
          </Suspense>
          <div>
            <div>
              <h2 className="text-4xl font-extrabold">{title}</h2>
              <ul className="*:font-semibold flex flex-wrap my-3 px-3 gap-x-5">
                <li className="list-item">
                  <span>
                    Bedroom{" "}
                    <FontAwesomeIcon icon={faBed} className="text-secondary" />{" "}
                    :{" "}
                  </span>{" "}
                  <span>{property?.beds}</span>
                </li>
                <li>
                  <span>
                    Rest Room{" "}
                    <FontAwesomeIcon
                      icon={faBathtub}
                      className="text-secondary"
                    />{" "}
                    :{" "}
                  </span>{" "}
                  <span>{property?.bathroom}</span>
                </li>
                <li>
                  <span>
                    Sqrft{" "}
                    <FontAwesomeIcon
                      icon={faRulerCombined}
                      className="text-secondary"
                    />{" "}
                    :{" "}
                  </span>{" "}
                  <span>{property?.squareFt}</span>
                </li>
              </ul>
              <div className="flex gap-x-4 items-center font-semibold">
                <Rating
                  value={4}
                  readOnly
                  className="max-w-[140px]"
                  itemStyles={{
                    itemShapes: ThinStar,
                    inactiveFillColor: "#1E293B",
                    activeFillColor: "#f59e0b",
                  }}
                />{" "}
                (20)
              </div>
              <div className="my-3 px-2">
                <p className="text-lg font-bold mb-2">
                  <FontAwesomeIcon icon={faMap} className="text-secondary" />{" "}
                  <strong>{property?.location}</strong>
                </p>
                <h3 className="text-3xl font-extrabold mb-2">
                  {property?.state}, Nigeria
                </h3>
                <p className="font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  a, in unde at nesciunt reprehenderit explicabo culpa voluptate
                  minus quis minima deleniti molestiae amet distinctio nobis
                  consectetur. Rem perferendis excepturi, veniam totam
                  laboriosam, praesentium dolorum provident fuga reiciendis
                  adipisci voluptates eum ad laborum in cumque reprehenderit
                  necessitatibus quae atque, non expedita! Hic consequuntur
                  mollitia quidem voluptas nisi quas numquam impedit velit
                  dolor, doloribus itaque ipsa unde! Necessitatibus, laboriosam
                  pariatur, vel ipsum aut rem modi aperiam mollitia aliquam
                  veritatis dolorem ipsam recusandae nam delectus officia.
                </p>
              </div>
              <div>
                <Link href='/contact' className="btn btn-primary px-5 rounded-sm">Book Appointment With Agent</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
