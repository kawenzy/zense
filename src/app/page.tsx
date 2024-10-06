"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LandBack, LandItem } from "@/components/mod/landme";
import {
  BeakerIcon,
  UserIcon,
  UserPlusIcon,
  Bars3Icon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Masuk } from "@/components/auth/masuk";
import { useState } from "react";
import { Daftar } from "@/components/auth/daftar";
export default function Home() {
  const quotes = [
    "Kehidupan adalah 10% yang terjadi pada kita dan 90% bagaimana kita meresponsnya.",
    "Jangan menunggu! waktu tidak akan pernah 'tepat'. Mulailah dari tempat kamu berdiri, dan bekerjalah dengan alat apa pun yang kamu miliki.",
    "Kesuksesan bukan kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika kamu mencintai apa yang kamu kerjakan, kamu akan sukses.",
    "Hidupmu adalah kisahmu. Buatlah cerita yang hebat.",
  ];

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  return (
    <div className="bg-accent">
      <Masuk 
      className={open ? "block" : "hidden"}
      pop={() => {
        setOpen(open => !open);
      }}/>
      <Daftar 
      className={openR ? "block" : "hidden"}
      pop={() => {setOpenR(openR => !openR)}}/>
      <div className="p-4 md:p-8 ">
        <div className="flex bg-root sticky top-2 z-20 md:z-0 md:relative md:top-0 p-4 rounded-md justify-center m-auto items-center ">
          <LandBack className=" px-4 py-2 mr-auto rounded-md">
            <LandItem tag="barflex">
              <span className="junePro text-accent md:text-2xl">zense</span>
            </LandItem>
          </LandBack>
          <LandBack className=" ml-auto block md:hidden">
            <LandItem tag="humber">
              <Bars3Icon className="size-8 text-second" />
            </LandItem>
          </LandBack>
          <LandBack className=" ml-auto hidden md:block">
            <LandItem tag="barflex">
              <span onClick={() => {setOpen(open => !open)}} className="junePro cursor-pointer items-center text-second flex gap-2 text-[15px] md:text-xl ">
                <UserIcon className="size-5 md:size-8" />
                masuk
              </span>
              <span onClick={() => {setOpenR(openR => !openR)}} className="junePro items-center text-second flex gap-2 text-[15px] md:text-xl cursor-pointer">
                <UserPlusIcon className="size-5 md:size-8" />
                daftar
              </span>
            </LandItem>
          </LandBack>
        </div>
        <br />
        <div className="block items-center justify-center m-auto w-full text-center h-full rounded-lg">
          <span className="text-primary text-[4rem] md:text-[7rem] lg:text-[10rem] text-center m-auto poppins-bold">
            ZENSE HERE
          </span>
          <img
            className="relative z-10 m-auto -translate-y-[6rem] md:scale-125"
            src="./pe.svg"
            alt="2"
          />
          <div className="grid grid-flow-row gap-8 xl:gap-0 grid-cols-1 md:grid-cols-2 xl:block">
            <div className="xl:absolute xl:z-10 text-left h-[257px] md:h-[365.5px] lg:h-[345.5px] xl:h-[257px] xl:w-[457px] rounded xl:-translate-y-[15rem] xl:translate-x-[4rem] items-center bg-second ">
              <div className="p-5 bg-root items-center flex m-auto rounded-t">
                <p className="junePro text-[25px] text-second">semangat</p>
              </div>
              <div className="p-7 py-5">
                <LandItem tag="quo" text={quotes} />
              </div>
            </div>
            <div className="xl:relative xl:ml-auto xl:z-10 bg-second xl:-translate-y-[10rem] xl:w-[460px] xl:-translate-x-[10rem] rounded">
              <div className="p-5 bg-root items-center flex m-auto rounded-t">
                <p className="junePro text-[25px] text-second">zense robot</p>
              </div>
              <div className="p-5">
                <div className="flex gap-3 items-center justify-center">
                  <img src="./picture/probot.svg" className="h-12 w-12" />
                  <p className="text rockford text-[24px]">Ochobot</p>
                  <QuestionMarkCircleIcon className="size-6 ml-auto" />
                </div>
                <div className="mt-4  text text-left rockford p-4 rounded-md bg appearance-none border ">
                  halo kawan, apakah kamu butuh bantuan ?, aku akan membantumu
                  sebisa mungkin
                </div>
                <div className="mt-5 bg-root p-4 px-3 rounded appearance-none">
                  <span className="text-zinc-100 poppins-bold text-[20px]">
                    ayok chat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
