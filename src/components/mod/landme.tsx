"use client";
import { cn } from "@/lib/utils";
import Typewriter from 'typewriter-effect';
import React, { useRef } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const LandItem = ({
  words,
  text,
  tag,
  children,
  className,
}: {
  text?: string[];
    tag: "quo" | "barflex" | "humber" | "ai";
  words?: {
    text: string;
    className?: string;
  }[];
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  if(tag == "quo"){
    return (
        <div
        ref={ref}
        className={cn(
            " m-auto items-center  flex appearance-none",
            className
        )}
        >
        {/* <TypewriterEffectSmooth words={words} /> */}
        <Typewriter
        options={{
          loop: true,
          strings: text,
          autoStart: true
        }}
          />
        </div>
  );}
  if(tag == "ai" || tag == "humber"){
    return (
        <div 
        ref={ref}
        className={cn(" items-center m-auto  appearance-none", className)}>
            {children}
        </div>
    )
  }
  if(tag == "barflex") {
    return (
      <div
      ref={ref}
      className={cn(" items  flex gap-4 appearance-none")}
      >
        {children}
      </div>
    )
  }
  return null;
};



export const LandBack = ({
  className,
  children,
}:{
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null)
  return(
    <div
    ref={ref}
    className={cn(" items-center justify-center", className)}
    >
      {children}
    </div>
  )
}