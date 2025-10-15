import type { Metadata } from "next";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Roboto } from "next/font/google"; 
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500","600", "700", "800", "900"], 
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Car Doctor",
  description: "Car Doctor - Expert car maintenance and repair services",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased `}
      >
        <div className="w-11/12 min-h-screen mx-auto p-2">
           <Nav />
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
