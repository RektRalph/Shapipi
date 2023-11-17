import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shapipi",
  description: "Sa shapipi, bumili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-200")}>
        <div className="relative text-slate-900 ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
