"use client"

import { Flex } from "@radix-ui/themes"
import { LandBack, LandItem } from "../mod/landme"

export default function NavbarPage() {
    const words = [
        {
          text: "Tidak apa-apa untuk tidak baik-baik saja. Izinkan dirimu merasakan apa yang perlu dirasakan."
        },
        {
          text: "Setiap langkah kecil menuju penyembuhan adalah pencapaian. Berikan dirimu penghargaan atas kemajuanmu."
        },
        {
          text: "Kau tidak sendirian dalam perjuangan ini. Ada banyak orang yang peduli dan siap mendengarkan."
        },
        {
          text: "Ingatlah, badai pasti berlalu. Ada harapan di ujung jalan, meski saat ini mungkin sulit terlihat."
        },
        {
          text: "Merawat kesehatan mental adalah tanda kekuatan, bukan kelemahan. Jadilah lembut pada dirimu sendiri."
        }
      ];
      
    return(
        <Flex justify="center" gap="3" className="w-screen p-2"  position="fixed">
            <LandBack className="bg w-fit rounded">
                <LandItem tag="quo" words={words} className="w-[300px] text p-3"/>
            </LandBack>
        </Flex>
    )
}