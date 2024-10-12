import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-paccent w-full h-full">
      <div className="w-full max-w-[800px] py-4 px-3 m-auto items-center justify-center flex">
        <div className="flex flex-col gap-4 items-center w-full">
          <span className="junePro text-3xl text-proot">Hello Zense</span>
          <div className="flex flex-col gap-3 min-h-[85vh] max-h-[85vh] overflow-y-scroll scrollbar-none">
            s
          </div>
        <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="ketik apa yang kamu inginkan....." />
            <Button type="submit" className="bg-proot">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
