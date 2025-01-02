import React from "react";
import Image from "next/image";

export default function AppointmentForm() {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        <div className="card card-bordered image-full !text-primary">
          <figure>
            <Image
              src="/assets/images/Appointment-bg.jpg"
              alt=""
              width={1000}
              height={1000}
              className="size-full object-cover object-center"
            />
          </figure>

          <div className="card-body ">
            <div className="text-2xl py-4 px-6 text-white text-center font-bold uppercase">
              Book an Appointment
            </div>
            <form className="py-4 px-6" action="" method="POST">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full  px-3  leading-tight input-md text-primary outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter your Fullname"
                />
              </div>
              <div className="flex gap-5">
                <div className="mb-4 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight input-md text-primary"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight input-md text-primary"
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mb-4 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight input-md text-primary outline-none"
                    id="date"
                    type="date"
                    placeholder="Select a date"
                  />
                </div>
                <div className="mb-4 w-full">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight input-md text-primary outline-none"
                    id="time"
                    type="time"
                    placeholder="Select a time"
                  />
                </div>
              </div>
              <div className="mb-4">
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight outline-none select-md text-primary"
                  id="service"
                  name="service"
                >
                  <option disabled selected>
                    Select a service
                  </option>
                  <option value="construction">Building / Construction</option>
                  <option value="property">
                    Property Buying, selling or Management
                  </option>
                  <option value="estate">Real Estate Consltation</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows={4}
                  placeholder="Additional information"
                ></textarea>
              </div>
              <div className="flex items-center mb-4">
                <button className="btn btn-accent px-10" type="submit">
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
