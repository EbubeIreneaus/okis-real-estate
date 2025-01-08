"use client";
import { AOSInit } from "@/lib/aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function InitAos() {
  useEffect(() => {
    AOSInit();
  }, []);
  return null;
}

export default React.memo(InitAos)