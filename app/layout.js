import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "easytix.co.uk",
  description: "easytix.co.uk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>
      <Header></Header>
        
        
        
        {children}
        
        
        
        <Footer></Footer>
        
        </body>
        </UserProvider>
    </html>
  );
}
