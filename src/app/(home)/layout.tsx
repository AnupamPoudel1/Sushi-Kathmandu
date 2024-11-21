import type { Metadata } from "next";
import { Roboto_Slab, Lora } from 'next/font/google';
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Navbar from "@/sections/Navbar";

const lora = Lora({ subsets: ['latin'], variable: "--font-sans" });
const roboto = Roboto_Slab({ subsets: ['latin'], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "Bukta Sushi",
    template: "%s | Bukta Sushi",
  },
  description: "Welcome to Bukta Sushi, Tromsø's premier destination for authentic Japanese cuisine, nestled in the stunning landscapes of northern Norway. Located in the heart of Tromsø, we bring the art of sushi-making to this Arctic paradise, blending traditional Japanese techniques with the freshest ingredients sourced locally and globally."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(lora.variable, roboto.variable, "antialiased font-sans")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
