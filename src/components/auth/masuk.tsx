import { cn } from "@/lib/utils";
import { AtSymbolIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { KeyRound, Mail } from "lucide-react";
import { MouseEventHandler } from "react";

export const Masuk = ({
  pop,
  bop,
  className,
}: {
  pop: MouseEventHandler<SVGSVGElement> | undefined;
  bop: MouseEventHandler<HTMLSpanElement> | undefined;
  className?: string;
}) => {
  return (
    <main className={cn("", className)}>
      <div className="flex min-h-screen m-auto fixed z-50 right-0 left-0 items-center justify-center bg-black/50">
        <div className="w-full h-screen md:w-96 md:h-fit bg-paccent shadow md:rounded-md m-auto">
          <div className="bg p-3 px-4 flex items-center justify-center m-auto rounded-t-md">
            <h4 className="text-proot poppins-bold text-[20px] md:text-2xl">
              Masuk
            </h4>
            <XMarkIcon
              className="size-6 md:size-8 text ml-auto cursor-pointer"
              onClick={pop}
            />
          </div>
          <div className="p-5 flex flex-col min-h-full m-auto items-center justify-center">
            <form className="flex flex-col w-full items-center justify-center gap-4 min-h-full">
              <label className="input input-bordered input-lg rounded w-full text-paccent flex items-center gap-2">
                {/* <AtSymbolIcon className="size-6 text-zinc-400"/> */}
                <Mail />
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <label className="input input-bordered rounded w-full text-paccent flex items-center gap-2 input-lg">
                {/* <AtSymbolIcon className="size-6 text-zinc-400"/> */}
                <KeyRound />
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                />
              </label>
              <button className="btn rounded btn-primary rockford w-full">
                Submit
              </button>
            </form>
            <p className="rockford text-proot mt-6 text-center">
              belum punya akun ?{" "}
              <span
                className="text-pme italic underline"
                onClick={bop}
                role="button"
              >
                daftar
              </span>{" "}
              sekarang
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
