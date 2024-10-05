"use client";
import { cn } from "@/lib/utils";
// "use client"return
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const LandBar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={cn(
        "p-10 rounded items-center m-auto appearance-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export const LandBody = ({
  tag,
  className,
  children,
}: {
  tag: "lie" | "quo";
  className?: string;
  children?: React.ReactNode;
  // [key: string ]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  switch (tag) {
    case "quo":
      return (
        <div ref={ref} className={cn("m-auto items-center p-2", className)}>
          {children}
        </div>
      );
    case "lie":
      return (
        <div
          ref={ref}
          className={cn(
            "p-2 flex gap-4 items-center justify-center m-auto",
            className
          )}
        >
          {children}
        </div>
      );
    default:
      return <div className={cn("", className)}></div>;
  }
};



export const LandItem = ({
    className,
    children,
    id,
    tag,
    url,
}: {
    children?: React.ReactNode;
    className?: string;
    id: number;
    tag: "but" | "quot" | "menu";
    url?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    
}