import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
})


export const metadata: Metadata = {
  title: "Mental Health Center",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased flex flex-col items-center`}
      >
        <Suspense fallback={<div className="w-screen h-screen place-items-center">Loading ...</div>}>
            {children}
        </Suspense>
      </body>
    </html>
  );
}
