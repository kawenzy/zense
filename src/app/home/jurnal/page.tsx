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
import { Angry, ExternalLink, Frown, Laugh, ListCollapse, Smile } from "lucide-react";
import { MayaPop } from "@/components/pop/dop";

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
  

export default function Home() {
  const [open, SetOpen] = useState(false);
  return (
    <div className={`bg-paccent w-full ${open ? "p-0" : "p-4" } md:p-4`}>
    <MayaPop classs={`${open ? "block" : "hidden"}`} avatar="" base="" description="" date="" keadaan={() => {
      SetOpen((open) => !open);
    }} title=""/>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full max-w-[600px] m-auto  gap-3 items-center">
          <div className="flex w-full  items-center space-x-2">
            <Input type="text" placeholder="search name jurnals....." />
            <Button type="submit" className="bg-proot">Search</Button>
          </div>
          <Select>
            <SelectTrigger className="w-fit">
            <ListCollapse />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tagar</SelectLabel>
                <SelectItem value="Buruk">Buruk</SelectItem>
                <SelectItem value="Senang">Senang</SelectItem>
                <SelectItem value="Sedih">Sedih</SelectItem>
                <SelectItem value="Kesal">Kesal</SelectItem>
                <SelectItem value="Lucu">Lucu</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 items-center m-auto">
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
      </div>
    </div>
  );
}
