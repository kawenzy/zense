"use client";

import { Flex } from "@radix-ui/themes";
import { LandBack, LandItem } from "../mod/landme";

export default function NavbarPage() {
  let quotes = [
    "Tidak apa-apa untuk merasa tidak baik-baik saja.",
    "Setiap langkah kecil adalah pencapaian, hargai dirimu.",
    "Kau tidak sendirian, banyak yang peduli dan siap mendengar.",
    "Ingat, badai pasti berlalu, harapan selalu ada.",
  ];

  return (
    <Flex
      justify="center"
      gap="3"
      className="w-screen p-2 mt-2"
      position="fixed"
    >
      <LandBack className="bg-primary backdrop-blur w-[650px]  rounded">
        {null}
      </LandBack>
    </Flex>
  );
}
