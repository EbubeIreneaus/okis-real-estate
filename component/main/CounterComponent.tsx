"use client"
import CountUp from "react-countup";

export default function CounterComponent() {
  

  return (
    <div className="w-full card card-bordered bg-secondary rounded-sm">
      <div className="card-body text-sm">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-10 text-center px-10">
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp enableScrollSpy end={1000} suffix="+" duration={3} />
          </h2>
          <p>Total Properties Sold</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp enableScrollSpy end={600} duration={3} suffix="+" />
          </h2>
          <p>Total Satisfied Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
          <CountUp enableScrollSpy end={500} duration={3} suffix="+" />
          </h2>
          <p>Total Building Constructions</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp enableScrollSpy end={700} duration={3} suffix="+" />
          </h2>
          <p>Total Building Renovations</p>
        </div>
      </div>
      </div>
    </div>
  );
}
