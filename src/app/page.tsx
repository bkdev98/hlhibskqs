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
        <div className="bg-[url('/grainy.png')] opacity-[0.0625] -inset-[150%] absolute w-[300%] h-[300%] animate-grain" />
        <div className="absolute inset-24 rounded-full blur-3xl [background:conic-gradient(from_195.7deg_at_50%_50%,_#7147FF_0deg,_rgba(66,_232,_255,_0)_95.01deg,_rgba(255,_126,_171,_0.5)_185.59deg,_#7147FF_360deg)]" />
      </div>
      <div className="relative flex flex-col items-center justify-between p-12 lg:p-16 gap-8 min-h-screen">
        <p>it's been</p>
        <h1 className="text-[80px] md:text-[140px] xl:text-[170px] leading-none text-dotted text-center">
          {value}
        </h1>
        <p>since Khanh quit smoking...</p>
      </div>
    </main>
  );
}
