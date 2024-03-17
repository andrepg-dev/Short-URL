import { LucideIcon } from "lucide-react";

export default function CardInput({ Icon, text }: { Icon: LucideIcon, text: string }) {
  return <div className="flex gap-2 items">
    <Icon className="size-6" strokeWidth={1}/>
    <p className="text-base md:text-[1.1rem]">{text}</p>
  </div>
}