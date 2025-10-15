import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],

// });

const font = Roboto({
  weight: ['100', '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900'],
  subsets: ['latin'],
})


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Job Portal | Landing Page",
  description: "Job Portal Landing Page using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Responsive/>
        {children}
      </body>
    </html>
  );
}
