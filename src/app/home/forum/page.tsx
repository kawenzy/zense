"use client"

import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink, ListCollapse } from "lucide-react";
import { MayaPop } from "@/components/pop/dop";

const fororang = [
  {
    id: 13,
    name: "John Doe",
    title: "diskusi singkat tentang halangan",
    desc: "hey aku ingin membuat diskusi ini sementara dan ingin membahas sesuatu yang mungkin bisa menemukan jalan yang kita inginkan",
    pf: "../avatar/sp.png",
    base: "bg-violet-100",
    tgl: "20 november 2024"
  },
  {
    id: 21,
    name: "mery carly",
    title: "bagaiman mengatasi keadaan ini ?",
    desc: "beberapa cara agar kita bisa mengatasi situasi yang kita anggap sulit, seperti presentasi , pertama kita harus bisa dan berani mencoba hal yang tidak kita bisa",
    pf: "../avatar/pr.png",
    base: "bg-green-100",
    tgl: "10 november 2024"
  },
  {
    id: 32,
    name: "carli molck",
    title: "kesehatan atasi",
    desc: "diskusi tentang kesehatan yang membuat kita sulit dan juga kesusahan",
    pf: "../avatar/qs.png",
    base: "bg-yellow-100",
    tgl: "23 november 2024"
  },

]

let des: string;
let base: string = "";
let title: string = "";
let date: string = "";

export default function Home() {
  const [open, SetOpen] = useState(false);
  return (
    <div className={`bg-paccent w-full ${open ? "p-0" : "p-4" } md:p-4`}>
    <MayaPop classs={`${open ? "block" : "hidden"}`} avatar="" base={base} description=""  date={date} keadaan={() => {
      SetOpen((open) => !open);
    }} title={title}/>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full max-w-[800px] m-auto  gap-3 items-center">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="search name foruns....." />
            <Button type="submit" className="bg-proot">Search</Button>
          </div>
          <Select>
            <SelectTrigger className="w-fit">
            <ListCollapse />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tagar</SelectLabel>
                <SelectItem value="pendidikan">Pendidikan</SelectItem>
                <SelectItem value="pembelajaran">Pembelajaran</SelectItem>
                <SelectItem value="masak">Masak</SelectItem>
                <SelectItem value="merakit">Merakit</SelectItem>
                <SelectItem value="ngoding">Ngoding</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-full max-w-[800px] gap-4 items-center m-auto">
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
                  <ExternalLink className="size-7 text-proot cursor-pointer" onClick={() => {
                    SetOpen((open) => !open);
                    title = as.title;
                    base = as.base;
                    date =  as.tgl;
                  }}/>
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
      </div>
    </div>
  );
}
