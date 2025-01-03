"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AOSInit } from "@/lib/aos";
import "aos/dist/aos.css";

function Layout({ children }: { children: React.ReactNode }) {
  function activateHeader() {
    const header = document.querySelector("header");
    header?.classList.add("!fixed");
    header?.classList.add("!top-0");
    header?.classList.add("!bg-primary");
  }

  function deactivateHeader() {
    const header = document.querySelector("header");
    header?.classList.remove("!fixed");
    header?.classList.remove("!top-0");
    header?.classList.remove("!bg-primary");
  }

  function toggleNav() {
    const nav = document.querySelector(".nav-down");
    nav?.classList.toggle("!max-h-[10000px]");
    nav?.classList.toggle("!opacity-100");
  }

  useEffect(() => {
    AOSInit()
    const links = document.querySelectorAll('.n-s-l')
    function handleScroll() {
      if (window.scrollY >= 300) {
        activateHeader();
      } else {
        deactivateHeader();
      }
    }
  
    window.addEventListener("scroll", handleScroll);

    links?.forEach(link => {
      link.addEventListener('click', toggleNav)
    })
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navLinks: { name: string; href: string; children: any[] }[] = [
    { name: "home", href: "/", children: [] },
    { name: "about", href: "/about", children: [] },
    { name: "service", href: "/service", children: [] },
    {
      name: "properties",
      href: "/listing",
      children: [
        { name: "appartment", href: "/listing?property=appartment", children: [] },
        { name: "office", href: "/listing?property=office", children: [] },
        { name: "land", href: "/listing?property=land", children: [] },
      ],
    },
    { name: "blog", href: "#", children: [] },
    { name: "contact", href: "/contact", children: [] },
  ];

  return (
    <>
      <header className="w-full absolute top-0 mx-auto z-[9999] text-base-100 bg-transparent shadow-sm transition-all ease-linear duration-300">
        <div className=" h-16 px-10 relative">
          <div className=" flex justify-between items-center h-full font-semibold">
            <div>
              <h2 className="text-2xl font-extrabold font-mono">OKI&apos;S</h2>
            </div>
            <nav
              className="h-full text-sm md:inline-block hidden"
              role="navigation"
            >
              <ul className="flex gap-3 h-full items-center">
                {navLinks.map((link) =>
                  link.children.length < 1 ? (
                    <Link key={link.name} href={link.href}>
                      <li
                        className={`uppercase hover:text-secondary px-3 ${
                          pathname == link.href
                            ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            : ""
                        }`}
                      >
                        {" "}
                        {link.name}{" "}
                      </li>
                    </Link>
                  ) : (
                    <li
                      key={link.name}
                      className="uppercase cursor-pointer hover:text-secondary d-link px-3"
                    >
                      <Link href={link.href}>{link.name}</Link>
                      <div className="absolute top-full bg-slate-50 text-black max-h-0 opacity-0 h-fit overflow-hidden transition-all duration-300 w-44 d-links">
                        <ul>
                          {link.children.map((link) => (
                            <Link href={link.href} key={link.name}>
                              <li className="block my-1 px-2 py-2 border-b text-sm hover:text-secondary">
                                {link.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="inline-block md:hidden">
              <button
                className="btn btn-accent text-white hover:bg-secondary"
                aria-label="open sidebar"
                onClick={() => toggleNav()}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>

          <div className="w-full absolute left-0 top-full max-h-0 h-max opacity-0 overflow-hidden nav-down transition-all duration-300 ease-linear">
            <ul className="menu menu-lg bg-accent text-capitalize">
              {navLinks.map((link) =>
                link.children.length < 1 ? (
                  <Link href={link.href} key={link.name} className="bg-primary n-s-l">
                    <li className="px-2 py-3 capitalize font-semibold hover:bg-slate-950/20 rounded-md text-lg ">{link.name}</li>
                  </Link>
                ) : (
                  <li key={link.name} >
                    <details open className="w-full">
                      <summary className="ps-1.5 capitalize w-full text-lg font-semibold">{link.name}</summary>
                      <ul>
                        {link.children.map((link) => (
                          <Link href={link.href} key={link.name} className="bg-primary n-s-l">
                            <li className="p-2 capitalize hover:bg-slate-950/10 rounded-md text-lg font-semibold">{link.name}</li>
                          </Link>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>

      <main className="text-slate-800">{children}</main>

      <footer className="bg-primary  py-4 px-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p className="text-xs text-gray-400 md:text-sm">
              Copyright 2020 &copy; All Rights Reserved
            </p>
          </div>
          <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
