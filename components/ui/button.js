import { cn } from "@/utils/cn";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "w-fit border text-sm p-2 rounded-lg select-none",
        "bg-[#f6851f] text-slate-50 hover:bg-[#f6991f] active:bg-[#f6991f] transition"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
