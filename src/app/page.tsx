"use client"

import Image from "next/image";
import { usePathname } from 'next/navigation'
import { LandBack, LandItem } from "@/components/mod/landme";
export default function Home() { 
  const words = [{
    text: "hello world",
    className: "text-[20px] p-0"
  },
  {
    text: "ayam",
    className: "text-blue-500 text-[20px] p-0"
  }
]
const pathname = usePathname()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="m-auto flex min-h-[70vh] items-center justify-center">
        <LandBack className="bg-zinc-800 rounded-md w-[300px]">
          <LandItem tag="quo" words={words} className="text-primary" text={["hewo", "whjwjwjw"]}/>
        </LandBack>
        <p>Current pathname: {pathname}</p>
      </div>
    </div>
  );
}
