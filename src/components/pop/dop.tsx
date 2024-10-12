import { MouseEventHandler } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Frown, Heart, Laugh, ListCollapse, ShieldCloseIcon, Smile, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem,  SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export const MayaPop = ({
  title,
  avatar,
  description,
  date,
  keadaan,
  base,
  classs,
}: {
  title: string;
  avatar: string;
  description: string;
  date: string;
  base: string;
  keadaan: MouseEventHandler<SVGSVGElement> | undefined;
  classs?: string;
}) => {
  return (
    <div className={cn(classs)}>
      <div className="flex min-h-screen m-auto w-full h-full items-center justify-center fixed z-50 bg-black/50">
        <div className="flex flex-col w-full h-full md:min-h-[500px] md:max-h-[650px] md:min-w-[450px] md:max-w-[550px] lg:min-w-[800px] lg:max-w-[800px] lg:min-h-[720px] lg:max-h-[720px] p-6 rounded bg-pbroot">
          <X
            className="ml-auto size-8 text-proot cursor-pointer"
            onClick={keadaan}
          />
          <div className="flex flex-row gap-3 mt-2 items-center">
            <span className="text-proot preahivear text-2xl md:text-3xl">
              {title}
            </span>
          </div>
          <div className="flex flex-row gap-3 items-center mt-6">
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                TUTORIAL
              </p>
            </div>
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                MAJALAH
              </p>
            </div>
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                FILM
              </p>
            </div>
            <div className="ml-auto text-right">
              <span className="text-proot ml-auto text-xs text-right font-sans">
                {date}
              </span>
            </div>
          </div>
          <div className="w-full h-[2px] rounded-full bg-accent mt-6"></div>

          <div className="flex flex-col gap-6 items-center overflow-y-auto max-h-screen md:max-h-[500px] scrollbar-none">
            <div className="w-full flex flex-col gap-4 px-2 md:px-4 py-5 rounded">
              <div className="flex flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src="../avatar/sp.png" />
                </Avatar>
                <span className="text-proot preahivear text-xl">Zense</span>
                <p className="font-sans text-gray-600 text-xs ml-auto text-right">
                  20 november 2023
                </p>
              </div>
              <p className="text-proot font-sans text-[14px] md:text-[16px]">
                sadsjfdjisdofwhfins d,aoisdhoasdoasndas d,asdiahspid
                sadsjfdjisdofwhfins...
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 md:px-4 py-5 rounded">
              <div className="flex flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src="../avatar/sp.png" />
                </Avatar>
                <span className="text-proot preahivear text-xl">Zense</span>
                <p className="font-sans text-gray-600 text-xs ml-auto text-right">
                  20 november 2023
                </p>
              </div>
              <p className="text-proot font-sans text-[14px] md:text-[16px]">
                sadsjfdjisdofwhfins d,aoisdhoasdoasndas d,asdiahspid
                sadsjfdjisdofwhfins... sadsjfdjisdofwhfins d,aoisdhoasdoasndas
                d,asdiahspid sadsjfdjisdofwhfins... sadsjfdjisdofwhfins
                d,aoisdhoasdoasndas d,asdiahspid sadsjfdjisdofwhfins...
                sadsjfdjisdofwhfins d,aoisdhoasdoasndas d,asdiahspid
                sadsjfdjisdofwhfins... sadsjfdjisdofwhfins d,aoisdhoasdoasndas
                d,asdiahspid sadsjfdjisdofwhfins... sadsjfdjisdofwhfins
                d,aoisdhoasdoasndas d,asdiahspid sadsjfdjisdofwhfins...
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 md:px-4 py-5 rounded">
              <div className="flex flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src="../avatar/sp.png" />
                </Avatar>
                <span className="text-proot preahivear text-xl">Zense</span>
                <p className="font-sans text-gray-600 text-xs ml-auto text-right">
                  20 november 2023
                </p>
              </div>
              <p className="text-proot font-sans text-[14px] md:text-[16px]">
                sadsjfdjisdofwhfins d,aoisdhoasdoasndas d,asdiahspid
                sadsjfdjisdofwhfins... sadsjfdjisdofwhfins d,aoisdhoasdoasndas
                d,asdiahspid sadsjfdjisdofwhfins... sadsjfdjisdofwhfins
                d,aoisdhoasdoasndas d,asdiahspid sadsjfdjisdofwhfins...
                sadsjfdjisdofwhfins d,aoisdhoasdoasndas d,asdiahspid
                sadsjfdjisdofwhfins... sadsjfdjisdofwhfins d,aoisdhoasdoasndas
                d,asdiahspid sadsjfdjisdofwhfins...
              </p>
            </div>
          </div>
          <div className="flex w-full mt-4 items-center space-x-2">
            <Input className="rounded" type="text" placeholder="......" />
            <Button type="submit" className="rounded text-pbroot preahivear">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MadaPop = ({
  id,
  name,
  desc,
  base,
  icon,
  classs,
  keadaan,
}: {
  id: number;
  name: string;
  desc: string;
  base: string;
  icon: string;
  classs?: string;
  keadaan: MouseEventHandler<SVGSVGElement> | undefined;
}) => {
  return (
    <div className={cn(classs)}>
      <div className="flex min-h-screen m-auto w-full h-full items-center justify-center fixed z-50 bg-black/50">
        <div className="flex flex-col w-full h-full md:min-h-[500px] md:max-h-[650px] md:min-w-[450px] md:max-w-[550px] lg:min-w-[800px] lg:max-w-[800px] lg:min-h-[320px] lg:max-h-[420px] p-6 rounded bg-green-100">
          <div className="flex flex-row gap-3 mt-2 items-center">
            <div className="p-4 rounded bg-paccent appearance-none">
              <Smile className="size-6 md:size-8 text-proot" />
            </div>
            <span className="text-proot preahivear text-xl">
              Falentiono rospa
            </span>
            <X
              className="ml-auto size-8 text-proot cursor-pointer"
              onClick={keadaan}
            />
          </div>
          <div className="flex flex-row gap-3 items-center mt-6">
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                SEDIH
              </p>
            </div>
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                HAPPY
              </p>
            </div>
            <div className="rounded px-3 py-2 block bg-proot">
              <p className="text-paccent preahivear text-[10px] md:text-xs">
                LUCU
              </p>
            </div>
            <div className="ml-auto text-right">
              <span className="text-proot ml-auto text-xs text-right font-sans">
                10 november 2029
              </span>
            </div>
          </div>
          <div className="w-full h-[2px] rounded-full bg-accent mt-6"></div>
          <div className="scrollbar-none w-full max-h-full overflow-y-scroll">
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
            <p className="text-proot preahivear text-xs md:text-xl">
              hari yang cukup indah
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center mt-3">
            <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-fit appearance-none bg-paccent border-none">
                <ListCollapse className="size-8 text-proot"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Reaction</SelectLabel>
                  {reaction.map((as) => (
                  <SelectItem value="s">{<as.emoji className="text-proot"/>}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const reaction = [
  {
    id: 1,
    emoji: Smile,
  },
  {
    id: 2,
    emoji: Heart,
  },
  {
    id: 3,
    emoji: Frown,
  },
  {
    id: 4,
    emoji: Laugh,
  },
];
