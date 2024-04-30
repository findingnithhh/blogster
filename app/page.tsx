import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardDirection } from "@/components/CardDirection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      {/* <CardDirection /> */}
      {/* <InfiniteMovingCardsDemo /> */}
    </>
  );
}
