"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function CardDirection() {
  const imageUrl = "/mountain.jpg";
  return (
    <div className="flex gap-20 justify-center items-center">
      <div className="h-[40rem] relative  flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">In the mountains</p>
          <p className="font-normal text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}
