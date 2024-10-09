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
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
  useState,
} from "react";
import { Daftar } from "@/components/auth/daftar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Angry,
  BotIcon,
  BrainIcon,
  ChevronLeft,
  ChevronRight,
  ExternalLinkIcon,
  Frown,
  Laugh,
  LucideProps,
  MessageCircleReply,
  Music2Icon,
  SendIcon,
  Smile,
  SmilePlusIcon,
} from "lucide-react";
import { CardBody } from "@/components/ui/3d-card";
import { Input } from "@/components/ui/input";
import { Hide } from "@/components/mod/hide";
export default function Home() {
  const quotes = [
    "Kehidupan adalah 10% yang terjadi pada kita dan 90% bagaimana kita meresponsnya.",
    "Jangan menunggu! waktu tidak akan pernah 'tepat'. Mulailah dari tempat kamu berdiri, dan bekerjalah dengan alat apa pun yang kamu miliki.",
    "Kesuksesan bukan kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika kamu mencintai apa yang kamu kerjakan, kamu akan sukses.",
    "Hidupmu adalah kisahmu. Buatlah cerita yang hebat.",
  ];

  // const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  const listactivity: {
    title: string;
    desc: string;
    url: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    color: string;
    base: string;
  }[] = [
    {
      title: "Meditasi",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac nibh ad dui elementum dignissim platea curabitur platea eu.",
      url: "/chid",
      icon: BrainIcon,
      color: "green-300",
      base: "bg-green-100",
    },
    {
      title: "Robot",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac nibh ad dui elementum dignissim platea curabitur platea eu.",
      url: "/ai",
      icon: BotIcon,
      color: "violet-300",
      base: "bg-violet-100",
    },
    {
      title: "Mood",
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac nibh ad dui elementum dignissim platea curabitur platea eu.",
      url: "/mood",
      icon: SmilePlusIcon,
      color: "red-300",
      base: "bg-yellow-100",
    },
  ];
  const forums: {
    name: string;
    avatar: string;
    chat: string;
  }[] = [
    {
      name: "carry",
      avatar: "./avatar/sp.png",
      chat: "wow bagus",
    },
    {
      name: "dalton",
      avatar: "./avatar/pr.png",
      chat: "saran kamu sangat baik sekali makasih ya ☺, dan juga diskusi yang kamu selalu buat bagus sekali ",
    },
    {
      name: "angelina",
      avatar: "./avatar/sq.png",
      chat: "dan juga forums ini sangat membantuku yang sulit dalam berkomunikasi ,karena disini kalia ramah sekali walaupun kalian sedang tidak baik baik saja",
    },
    {
      name: "carry",
      avatar: "./avatar/sp.png",
      chat: "yeah , aku juga setuju",
    },
    {
      name: "dalton",
      avatar: "./avatar/pr.png",
      chat: "aku juga, dan makasih ya semuanya ini sangat menyenangkan walaupun kita tidak bisa mengenal secara langsung tapi kali semua yang ada disini baik banget jadi terimakasih",
    },
  ];
  const journal: {
    emoji: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    chat: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    name: string;
    isi: string;
    color: string;
  }[] = [
    {
      emoji: Smile,
      chat: MessageCircleReply,
      name: "anonymus",
      isi: "hari ini adalah hari yang membuatku dimana merasa lebih baik",
      color: "bg-yellow-100",
    },
    {
      emoji: Frown,
      chat: MessageCircleReply,
      name: "anonymus",
      isi: "hari ini adalah hari yang membuatku dimana merasa lebih buruk",
      color: "bg-red-100",
    },
  ];
  const review: {
    avatar: string;
    desc: string;
    color: string;
  }[] = [
    {
      avatar: "./avatar/pr.png",
      desc: "menurutku ini sangat bagus karena membuatku berlatih berkomunikasi dengan orang lain",
      color: "bg-blue-100",
    },
    {
      avatar: "./avatar/ps.png",
      desc: "ini sangat bagus untukmu yang sedang tidak baik baik saja",
      color: "bg-yellow-100",
    },
    {
      avatar: "./avatar/sp.png",
      desc: "isinya sangat positif semua, saya suka",
      color: "bg-green-100",
    },
    {
      avatar: "./avatar/qs.png",
      desc: "aku rasa ini adalah website terbaik yang pernah ku kunjungi dengan fitur yang sangat ramah",
      color: "bg-violet-100",
    },
    {
      avatar: "./avatar/rs.png",
      desc: "terimakasih yang telah membuat ini, karena ini saya menjadi lebih baik lagi",
      color: "bg-orange-100",
    },
    {
      avatar: "./avatar/sq.png",
      desc: "aku sebagai penulis sangat senang sekali karena banyak yang terbantu olehku ,terimakasih zense",
      color: "bg-lime-100",
    },
  ];
  const both = ["./both/1.svg", "./both/2.svg", "./both/3.svg", "./both/4.svg"];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const masda = () => {
    setOpenR((openR) => !openR);
    setOpen((open) => !open);
  };
  const dasma = () => {
    setOpen((open) => !open);
    setOpenR((openR) => !openR);
  };
  return (
    <div className="bg-accen">
      <Masuk
        className={open ? "block" : "hidden"}
        pop={() => {
          setOpen((open) => !open);
        }}
        bop={() => masda()}
      />
      <Daftar
        className={openR ? "block" : "hidden"}
        pop={() => {
          setOpenR((openR) => !openR);
        }}
        bop={() => dasma()}
      />
      <div className="p-4 md:p-8 bg-paccent">
        <div className="hidden sm:flex  bg-paccent backdrop-blur  md:z-0 md:relative md:top-0 p-4 rounded-md justify-center m-auto items-center ">
          <LandBack className=" py-2 mr-auto rounded-md">
            <LandItem tag="barflex">
              <span className="junePro text-proot text-2xl md:text-4xl">
                zense
              </span>
            </LandItem>
          </LandBack>
          <LandBack className=" ml-auto block md:hidden">
            <LandItem tag="humber">
              <Bars3Icon className="size-8 text-second" />
            </LandItem>
          </LandBack>
          <LandBack className=" ml-auto hidden md:block">
            <LandItem tag="barflex">
              <span
                onClick={() => {
                  setOpen((open) => !open);
                }}
                className="junePro cursor-pointer items-center text-proot flex gap-2 text-[15px] md:text-xl "
              >
                <UserIcon className="size-5 md:size-8" />
                masuk
              </span>
              <span
                onClick={() => {
                  setOpenR((openR) => !openR);
                }}
                className="junePro items-center text-proot flex gap-2 text-[15px] md:text-xl cursor-pointer"
              >
                <UserPlusIcon className="size-5 md:size-8" />
                daftar
              </span>
            </LandItem>
          </LandBack>
        </div>
        <br className="hidden lg:block" />
        <div className="block items-center overflow-hidden justify-center m-auto w-full text-center h-full rounded-lg container px-0">
          <div className="flex flex-col-reverse lg:flex-row items-center m-auto gap-4 p-4">
            <div className="flex flex-col lg:w-[38%]  text-left m-auto">
              <h4 className="text-3xl md:text-4xl text-proot xl:text-5xl text poppins-bold">
                Solusi Kesehatan
                <br /> Mental Anda
              </h4>
              <p className="mt-4 text rockford line-clamp-3 text-proot">
                Tingkatkan suasana hati dan kesejahteraan Anda dengan dukungan
                emosional yang didukung AI, jurnal harian, daftar putar yang
                membangkitkan semangat, dan kutipan yang menginspirasi.
                Terhubunglah dengan komunitas yang peduli,
              </p>
              {/* <br/> */}
              <Button className="bg-proot mt-8 mr-auto w-32" onClick={()=>{setOpenR((openR) =>!openR)}}>memulai</Button>
            </div>
            <img
              src="./asa2.png"
              alt="Solusi Kesehatan"
              className="w-full lg:w-[600px] h-[200px] md:h-[280px] lg:h-[300px] xl:h-[340px] rounded-md overflow-hidden object-cover block m-auto"
            />
          </div>
        </div>
      </div>
      <div className="p-0 py-8 sm:p-4 sm:py-8 md:p-8 bg-plgeen w-full">
        <div className="content block items-center overflow-hidden  m-auto w-full justify-center">
          <div className="flex flex-col gap-2 m-auto items-center">
            <h2 className="text-2xl sm:text-3xl font-bold px-4 sm:px-0 xs text-center mt-4 poppins-bold text-proot">
              Aktivitas yang membuat mood kamu naik
            </h2>
            {/* Subtitle similar to the smaller text in the image */}
            <p className="text-proot text-[14px] px-4 sm:px-0 sm:text[18px] lg:text-xl rockford mt-2">
              Coba semua fiturnya di zense,
              <span className="text-paccent px-2 underline cursor-pointer font-bold italic">
                daftar{" "}
              </span>
              untuk melihatnya
            </p>
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5 mt-4">
              {listactivity.map((as) => (
                <Card
                  key={as.title}
                  className={`bg-paccent border-none rounded min-h-64  md:min-w-32 lg:min-w-96 max-w-96 appearance-none
        ${
          as.title === "Mood" ? " sm:col-span-2 sm:mx-auto xl:col-span-1" : ""
        }`} // Center the Mood card in 2-cols, return to normal in 3-cols
                >
                  <div className="flex flex-row justify-between gap-4 items-center p-3 px-4">
                    <div
                      className={`py-3 px-4 rounded mr-auto ${as.base} appearance-none b`}
                    >
                      <span className="text-[18px] preahivear text-proot appearance-none ">
                        {as.title}
                      </span>
                    </div>
                    <div
                      className={`p-4 rounded-full ml-auto ${as.base} appearance-none`}
                    >
                      {<as.icon className="size-8 text-proot" />}
                    </div>
                  </div>
                  <CardContent>
                    <p className="text-proot ">{as.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-row gap-4 items-center cursor-pointer" onClick={() =>{
                      window.location.href = `/${as.title.toLowerCase()}`
                    }}>
                      <span className="text-xl text-proot rockford">
                        mulai coba
                      </span>
                      <ExternalLinkIcon className="text-proot size-6 preahivear" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-paccent p-4 md:p-8">
        <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center m-auto w-[100%] lg:w-[80%] xl:w-[75%] py-8">
          <Card className="border-none rounded bg-blue-100 mt-4 sm:mt-0 sm:min-h-[594px] w-full sm:min-w-[580px] max-w-[580px] ">
            <CardHeader className="p-3 py-6 sm:p-6">
              <div className="junePro  text-2xl appearance-none flex items-center text-proot ">
                <span>Zense forums</span>
                <ExternalLinkIcon className="size-8 ml-auto cursor-pointer" onClick={() => {
                  window.location.href = "/forums"
                }}/>
              </div>
              <CardContent className="bg-paccent p-2 sm:p-4 h-[340px] sm:min-h-[460px] max-h-[460px] overflow-y-scroll scroll-smooth no-scrollbar rounded appearance-none">
                <div className="content bg-pbroot p-2 rounded h-32">
                  <span className="text-proot preahivear text-2xl m-auto flex justify-center items-center min-h-full">
                    content
                  </span>
                </div>
                <br />
                {forums.map((as) => (
                  <div key={as.name} className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt={as.name} src={as.avatar} />
                      </div>
                    </div>
                    <div className="chat-header rockford text-proot">
                      {as.name}{" "}
                      <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble bg-pbroot  text-proot text-xs sm:text-[14px]">
                      {as.chat}
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="bg-pbroot p-4 rounded">
                <div className="flex w-full items-center space-x-2">
                  <input
                    type="email"
                    className="py-3 w-full appearance-none outline-none ring-0 border bg-gray-50 px-3 rounded "
                    placeholder="type your text in here...."
                  />
                  <Button type="submit" className="bg-proot rounded py-6">
                    <SendIcon />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          <div className="flex flex-col items-center text-left sm:text-center lg:text-left m-auto justify-center gap-5">
            <span className="poppins-bold text-3xl md:text-5xl lg:text-6xl text-proot ">
              Buat Forums Chat kamu untuk kebahagian dan kesenangan
            </span>
            <p className="rockford sm:w-[80%] text-[12px] w-full sm:text-[14px] md:text-[14px] md:w-[70%] lg:w-full lg:text-[16px]">
              Gunakan fitur fitur unik di zense forums, lalu nikmati serunya
              berkomunikasi dengan banyak orang secara tidak langsung. forums
              dengan fitur yang aman dan memiliki hal positif di semua forumsnya
              ,nikmati semua fitur seperti emoji lalu membalas chat ,membuat
              forums dan lainnya
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 py-8 sm:px-8 md:p-8 bg-pmatcha">
        <div className="content py-5 block items-center justify-center m-auto w-full">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full justify-center m-auto md:w-[99%] lg:w-[94%] xl:w-[68%]">
            <div className="flex flex-col gap-3 text-center md:text-left md:w-[60%] lg:w-[60%] xl:w-full items-center md:items-start m-auto ">
              <span className="text-proot text-3xl lg:text-4xl junePro">
                Buat Jurnal Harianmu
              </span>
              <p className="preahivear text-proot text-[14px] sm:text-[16px] lg:text-[18px]">
                jurnal membantumu mengeluarkan rasa emotional didalam dirimu
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center m-auto">
              {journal.map((as) => (
                <div
                  key={as.name}
                  className="bg-paccent p-4  rounded flex w-full max-w-[380px] sm:min-w-72  md:max-w-[440px] lg:min-w-96  xl:max-w-[600px] flex-col gap-3"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <div
                      className={` p-4 rounded items-center w-fit ${as.color} `}
                    >
                      {<as.emoji className="size-8 text-proot" />}
                    </div>
                    <span className="text-proot text-xl preahivear">
                      {as.name}
                    </span>
                    {<as.chat className="text-proot ml-auto size-8 cursor-pointer" onClick={() => {window.location.href = "/jurnals"}}/>}
                  </div>
                  <div className="block">
                    <p>{as.isi}</p>
                  </div>
                  <span
                    className={`preahivear text-proot text-xs px-2 py-3 ${as.color} text-center`}
                  >
                    {" "}
                    20 orang membalas
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-paccent w-full p-4 py-8 m-auto">
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute sm:hidden left-0 p-2 bg-proot rounded-full z-10"
          >
            <ChevronLeft size={24} color="white" />
          </button>

          <div
            className="m-auto flex w-full overflow-x-scroll sm:overflow-hidden scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-h-2 scrollbar-track-transparent scrollbar-thumb-proot scroll-smooth no-scrollbar snap-x snap-mandatory space-x-4 sm:space-x-0 p-4 sm:p-0 sm:grid lg:w-[90%] xl:w-[80%] grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:items-center sm:justify-center"
            ref={scrollRef}
          >
            {review.map((as) => (
              <div
                key={as.avatar}
                className={`min-h-64 snap-center shrink-0 w-[100%] p-6 rounded ${as.color} flex flex-col gap-4`}
              >
                <div className="flex flex-row gap-4 items-center">
                  <div className="avatar">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gray-300">
                      <img
                        src={as.avatar}
                        alt="avatar"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <span className="text-proot text-lg preahivear">
                    anonymous
                  </span>
                </div>
                <p className="text-proot text-sm sm:text-base preahivear leading-relaxed">
                  {as.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute sm:hidden right-0 p-2 bg-proot rounded-full z-10"
          >
            <ChevronRight size={24} color="white" />
          </button>
        </div>
      </div>
      <div className="w-full bg-plgeen">
        <div className="content min-h-[50vh] py-20 flex items-center justify-center m-auto w-full ">
          <div className="flex flex-col items-center m-auto gap-4">
            <div className="flex flex-row gap-4 items-center m-auto">
              <div className="rounded bg-green-100 p-4">
                <Smile className="text-proot size-10 sm:size-16 lg:size-20" />
              </div>
              <div className="rounded bg-blue-100 p-4">
                <Frown className="text-proot size-10 sm:size-16 lg:size-20" />
              </div>
              <div className="rounded bg-red-100 p-4">
                <Angry className="text-proot size-10 sm:size-16 lg:size-20" />
              </div>
            </div>
            <p className="preahivear text-center text-proot text-[16px] sm:text-[18px]">
              apapun keadaan hatimu saat ini
              <br />
              zense siap membantu
            </p>
            <div
              onClick={() => {
                setOpenR((openR) => !openR);
              }}
              className="bg-yellow-100 py-3 cursor-pointer px-4 sm:py-4 sm:px-5 lg:py-4 lg:px-6 rounded appearance-none"
            >
              <span className="text-[18px] md:text-xl lg:text-2xl text-proot junePro">
                Daftar
              </span>
            </div>
          </div>
        </div>
      </div>
      <Hide />
      <div className="bg-proot w-full">
        <div className="min-h-24 w-full p-5 flex items-center m-auto justify-center">
          <p className="text-xl preahivear text-center text-paccent">
            © zense 2024
          </p>
        </div>
      </div>
    </div>
  );
}
