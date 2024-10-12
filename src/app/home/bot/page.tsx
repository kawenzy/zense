import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-paccent w-full h-full">
      <div className="w-full max-w-[800px] py-4 px-3 m-auto items-center justify-center flex">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col gap-3 w-full min-h-[85vh] max-h-[85vh] overflow-y-scroll scrollbar-none">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Bot className="size-8 text-proot"/>
                </div>
              </div>
              <div className="chat-header text-proot">
                Venzest
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble text-pbroot preahivear">Hey Friends!</div>
              {/* <div className="chat-footer opacity-50">Delivered</div> */}
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="../avatar/pr.png"
                  />
                </div>
              </div>
              <div className="chat-header text-proot">
                You
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble text-pbroot preahivear">Hi , i want give you questioin!</div>
              {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
            </div>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="ketik apa yang kamu inginkan....."
            />
            <Button type="submit" className="bg-proot">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
