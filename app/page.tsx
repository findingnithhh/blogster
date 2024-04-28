import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardDirection } from "@/components/CardDirection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <CardDirection />

    </>
  );
}
