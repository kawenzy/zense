import { cn } from "@/lib/utils";
import { AtSymbolIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MouseEventHandler } from "react";

export const Masuk = ({ pop, className }: { pop: MouseEventHandler<SVGSVGElement> | undefined; className?: string; }) => {
  return (
    <main className={cn("",className)}>
    <div className="flex min-h-screen m-auto fixed z-50 right-0 left-0 items-center justify-center bg-black/50">
      <div className="w-full h-screen md:w-96 md:h-fit bg-accent shadow md:rounded-md m-auto">
        <div className="bg p-3 px-4 flex items-center justify-center m-auto rounded-t-md">
          <h4 className="text poppins-bold text-[20px] md:text-2xl">Masuk</h4>
          <XMarkIcon className="size-6 md:size-8 text ml-auto cursor-pointer" onClick={pop}/>
        </div>
        <div className="p-5 flex flex-col min-h-full m-auto items-center justify-center">
          <form className="flex flex-col w-full items-center justify-center gap-4 min-h-full">
            <label className="input input-bordered input-lg rounded w-full text-accent flex items-center gap-2">
              {/* <AtSymbolIcon className="size-6 text-zinc-400"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered rounded w-full text-accent flex items-center gap-2 input-lg">
              {/* <AtSymbolIcon className="size-6 text-zinc-400"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <button className="btn rounded btn-primary rockford bg-primary w-full">
              Submit
            </button>
          </form>
          <p className="rockford text mt-6 text-center">
            belum punya akun ?{" "}
            <span className="text-primary italic underline">daftar</span>{" "}
            sekarang
          </p>
        </div>
      </div>
    </div>
    </main>
  );
};
