import Image from "next/image";
import { TicketCard } from "./components/TicketCard";
import { Hero } from "./components/Hero";
export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Hero></Hero>
        </div>
      </div>
    </main>
  );
}
