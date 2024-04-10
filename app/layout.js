import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easytix.co.uk",
  description: "Easytix.co.uk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header></Header>
        
        
        
        {children}
        
        
        
        <Footer></Footer>
        
        </body>
        
    </html>
  );
}
