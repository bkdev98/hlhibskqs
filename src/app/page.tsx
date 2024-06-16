"use client";

import { useEffect, useState } from "react";
import { countdown } from "./utils";
import { START_TIME } from "./constants";

export default function Home() {
  const [value, setValue] = useState<string>(countdown(START_TIME));

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(countdown(START_TIME));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative bg-[#1D1916]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-[url('/grainy.png')] opacity-[0.0625] inset-0 absolute" />
        <div className="h-full w-full bg-[url('/gradient.jpeg')] bg-top bg-no-repeat opacity-[0.3]" />
      </div>
      <div className="relative flex flex-col items-center justify-between p-12 lg:p-16 gap-8 min-h-screen">
        <p>it's been</p>
        <h1 className="text-[100px] md:text-[140px] xl:text-[170px] leading-none text-dotted text-center">
          {value}
        </h1>
        <p>since Khanh quit smoking...</p>
      </div>
    </main>
  );
}
