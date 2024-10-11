"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Angry, BookOpenText, Bot, CassetteTape, Dumbbell, ExternalLink, Frown, Group, HomeIcon, Laugh, LogOut, MessagesSquare, NotebookText, Smile, Users } from "lucide-react";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    let tags: string[];
    const links = [
      {
        label: "Dashboard",
        href: "#",
        icon: (
          <HomeIcon className="text-neutral-700 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Venzest",
        href: "/home/bot",
        icon: (
          <Bot className="text-neutral-700 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Forum",
        href: "#",
        icon: (
          <Users className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Jurnal",
        href: "#",
        icon: (
          <NotebookText className="text-neutral-700 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Logout",
        href: "#",
        icon: (
          <LogOut className="text-neutral-700 h-5 w-5 flex-shrink-0" />
        ),
      },
    ];
    const [open, setOpen] = useState(false);
    return (
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <audio src="./backsound.m4a" autoPlay className="hidden"/>
          <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-paccent w-full flex-1 overflow-x-hidden  mx-auto border border-neutral-200 h-full min-h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <SidebarLink key={link.label} link={link} />
              ))}
            </div>
          </div>

        </SidebarBody>
      </Sidebar>
          {children}
    </div>
        </body>
      </html>
    );
  }

  const Logo = () => {
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
  const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    );
  };
  