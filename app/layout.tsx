import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Modals from "./components/modals/modals";
import AuthContext from "@/context/auth-context";
import ToastContext from "@/context/toast-context";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata: Metadata = {
  title: "Fleet",
  description: "Find and book a great experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContext>
          <ToastContext/>
          {/* modals */}
          <Modals/>

          {/* main of the application */}
          <Navbar/>
          {children}
          <Footer/>
        </AuthContext>
      </body>
    </html>
  );
}
