import { CircleX } from "lucide-react";
import { motion } from "framer-motion";

export function Hide() {
  return (
    <div className="w-full">
      <motion.div
        drag="y" // memungkinkan drag hanya ke sumbu x (kiri-kanan)
        dragConstraints={{ top: -100 , bottom: 0}} // batas drag
        onClick={() => {
          window.location.href = "https://www.google.com/";
        }}
        className="bg-proot fixed m-auto tooltip z-50 items-center bottom-0 right-0 left-0 w-fit mb-6 p-4 rounded cursor-pointer"
        data-tip="tutup halammanmu agar orang disebelahmu tidak mengetahui"
      >
        <CircleX className="size-8 text-paccent" />
      </motion.div>
    </div>
  );
}
