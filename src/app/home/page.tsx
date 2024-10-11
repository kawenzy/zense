"use client";
import React, { useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Angry, BookOpenText, Bot, CassetteTape, Dumbbell, ExternalLink, Frown, Group, HomeIcon, Laugh, LogOut, MessagesSquare, NotebookText, Smile, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {

  const [open, setOpen] = useState(false);
  return (
      <Dashboard open={open} />
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
const topJ = [
  {
    id: 4,
    name: "John Doe",
    desc: "hari ini adalah hari yang cukup indah",
    base: "bg-green-100",
    icon: Smile,
  },
  {
    id: 6,
    name: "Jane Doe",
    desc: "sungguh membosankan ,kenapa aku tidak bisa seperti mereka yang hebat dalam hal apapun",
    base: "bg-blue-100",
    icon: Frown,
  },
  {
    id: 4,
    name: "carry salni",
    desc: "sangat mengesalkan sekali karena tadi itu sungguh menyebalkan ,aku yang kena selalu padahal aku diam",
    base: "bg-red-100",
    icon: Angry,
  },
  {
    id: 5,
    name: "micykel aslarf",
    desc: "hahaha ntah kenapa disini rasanya sangat lucu sekali walaupun aku tidak mengenal secara langsung ",
    base: "bg-yellow-100",
    icon: Laugh,
  },
];


const fororang = [
  {
    id: 13,
    name: "John Doe",
    title: "diskusi singkat tentang halangan",
    desc: "hey aku ingin membuat diskusi ini sementara dan ingin membahas sesuatu yang mungkin bisa menemukan jalan yang kita inginkan",
    pf: "./avatar/sp.png",
    base: "bg-violet-100",
    tgl: "20 november 2024"
  },
  {
    id: 21,
    name: "mery carly",
    title: "bagaiman mengatasi keadaan ini ?",
    desc: "beberapa cara agar kita bisa mengatasi situasi yang kita anggap sulit, seperti presentasi , pertama kita harus bisa dan berani mencoba hal yang tidak kita bisa",
    pf: "./avatar/pr.png",
    base: "bg-green-100",
    tgl: "10 november 2024"
  },
  {
    id: 32,
    name: "carli molck",
    title: "kesehatan atasi",
    desc: "diskusi tentang kesehatan yang membuat kita sulit dan juga kesusahan",
    pf: "./avatar/qs.png",
    base: "bg-yellow-100",
    tgl: "23 november 2024"
  },
  // {
  //   id: 14,
  //   name: "Dalton mercurius",
  //   title: "perubahan singkat yang pernah terjadi",
  //   desc: "pernah gak sih kalian yang ingin berubah menjadi yang kalian inginkan tetapi hanya sementara , seperti angin lalu yang hanya numpang lewat",
  //   pf: "./avatar/sq.png",
  //   tgl: "5 november 2024"
  // },
  // {
  //   id: 12,
  //   name: "ying xun fa",
  //   title: "membuat diri kebih baik",
  //   desc: "hey aku disini ingin mengajak kalian menjadi lebih baik dari hari kemarin , disini saya juga masih berusaha bisa lebih baik dari diri saya yang kemarin , mungkin misal kalian ingin ikut ayok kita ngobrol di forums sini agar bisa saling share",
  //   pf: "./avatar/rs.png",
  //   tgl: "18 november 2024"
  // },
]

const recomen = [
  {
    id: 1,
    title: "workout at home",
    desc: "workout dirumah agar meningkatkan mood kamu",
    base: "bg-red-100",
    icon: Dumbbell
  },
  {
    id: 2,
    title: "membaca",
    desc: "dengan membaca akan membuat pikiran kamu lebih tenang",
    base: "bg-yellow-100",
    icon: BookOpenText
  },
  {
    id: 3,
    title: "music",
    desc: "dengarkan music agar membuat isi hatimu terucapkan",
    base: "bg-blue-100",
    icon: CassetteTape
  }
]
// Dummy dashboard component with content
const Dashboard = ({ open }: { open: boolean }) => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200  flex flex-col gap-2 flex-1 w-full h-full">
          <span className="text-proot text-center sm:text-left mx-auto sm:mr-auto sm:ml-0 junePro text-xl md:text-2xl">
            Jurnal Terbaru hari ini
          </span>
        <div className={`hidden lg:flex lg:flex-row items-center gap-4`}>
          {topJ.map((as) => (
            <div
              key={as.name}
              className={`${as.base} p-4  rounded flex w-full  lg:w-full flex-col gap-3 appearance-none`}
            >
              <div className="flex flex-row gap-3 items-center">
                <div className={` p-4 rounded items-center w-fit bg-paccent `}>
                  {<as.icon className="sm:size-6 lg:size-8 text-proot" />}
                </div>
                <span className="text-proot sm:text-[20px] line-clamp-1 lg:text-xl preahivear">
                  {as.name}
                </span>
              </div>
              <div className="block min-h-16">
                <p className=" line-clamp-2 text-proot  font-sans">{as.desc}</p>
              </div>
              <span
                className={`preahivear text-proot text-xs relative z-10 bottom-0 px-2 py-3 bg-paccent text-center`}
              >
                {" "}
                {as.id} orang membalas
              </span>
            </div>
          ))}
        </div>
        <Carousel className="w-full px-6 py-0 sm:px-0 sm:py-0 block lg:hidden">
          <CarouselContent className="-ml-1">
            {topJ.map((as) => (
              <CarouselItem
              key={as.id}
              className="pl-1 sm:basis-1/2">
                <div className={`${as.base} p-4 appearance-none  rounded flex w-full  lg:w-full flex-col gap-3`}>
                  <div className="flex flex-row gap-3 items-center">
                    <div
                      className={` p-4 rounded items-center w-fit bg-paccent `}
                    >
                      {<as.icon className="sm:size-6 lg:size-8 text-proot" />}
                    </div>
                    <span className="text-proot sm:text-[20px] line-clamp-1 lg:text-xl preahivear">
                      {as.name}
                    </span>
                  </div>
                  <div className="block min-h-16">
                    <p className=" line-clamp-2 text-proot  font-sans">
                      {as.desc}
                    </p>
                  </div>
                  <span
                    className={`preahivear text-proot text-xs relative z-10 bottom-0 px-2 py-3 bg-paccent text-center`}
                  >
                    {" "}
                    {as.id} orang membalas
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-proot"/>
          <CarouselNext className="bg-proot"/>
        </Carousel>
        <div className="flex gap-2 flex-1">
          <div className="flex flex-col gap-4 items-center w-full h-full">
            <span className="junePro text-proot text-xl md:text-2xl text-left mr-auto">
              Forum terbaru hari ini
            </span>
            {fororang.map((as) => (
              <div key={as.id} className={`flex flex-col gap-2 w-full ${as.base} rounded-md appearance-none py-4 px-6`}>
                <div className="flex flex-row gap-3 items-center">
                  <img
                  alt={as.name}
                  src={as.pf}
                  className="rounded-full w-6 h-6 object-cover md:w-16 md:h-16 overflow-hidden appearance-none border-gray-100 border"
                  />
                  <h4 className="text-proot preahivear text-[16px] md:text-[18px] lg:text-xl line-clamp-1">
                    {as.name}
                  </h4>
                  <div className="flex gap-3 flex-row ml-auto justify-center items-center">
                  <p className="text-proot block font-sans text-[12px] lg:text-xs">{as.tgl}</p>
                  <ExternalLink className="size-7 text-proot"/>
                  </div>
                </div>
                <h4 className="junePro md:text-[18px] lg:text-xl text-proot w-[90%] text-left line-clamp-1">
                  {as.title}
                </h4>
                <p className="font-sans text-proot w-[90%] text-left line-clamp-1">
                  {as.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4  w-full h-full">
            <div className="flex flex-col gap-4">
              <span className="junePro text-proot  text-xl md:text-2xl">
                Rekomendasi aktivitas untukmu
              </span>
              {recomen.map((as) => (
                <div key={as.id} className={`block gap-3 px-4 py-3 w-full ${as.base} rounded-md appearance-none`}>
                  <div className="flex gap-3 items-center">
                    {<as.icon className="size-8 text-proot"/>}
                    <div className="flex flex-col gp-2">
                      <span className="text-proot line-clamp-1 preahivear text-[18px] md:text-xl">
                        {as.title}
                      </span>
                      <p className="font-sans text-proot line-clamp-1">
                        {as.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 ">
              <span className="junePro text-proot text-xl md:text-2xl">
                Venzest teman ngobrol
              </span>
              <div className="flex flex-col gap-3 px-4 py-3  rounded appearance-none bg-psecond">
                <div className="flex flex-row gap-3 items-center">
                  <Bot className="size-8 text-proot"/>
                  <span className="preahivear text-[18px] md:text-xl text-proot">
                    Venzest
                  </span>
                  <MessagesSquare className="size-8 text-proot ml-auto"/>
                </div>
                <p className="text-proot font-sans ">
                  halow {" haha "} apa ada yang bisa saya bantu ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
