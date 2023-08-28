"use client";

import Image from "next/image";
import { useState } from "react";
import CornerButton from "./components/CornerButton";

const cornerButtonData = [
  {
    text: "Projects",
    corner: "corner-tl",
  },
  {
    text: "Experience",
    corner: "corner-tr",
  },
  {
    text: "Education",
    corner: "corner-bl",
  },
  {
    text: "Technology",
    corner: "corner-br",
  },
];

export default function Home() {
  const [openedTab, setOpenedTab] = useState(-1);
  return (
    <>
      <main className="w-screen h-screen">
        <h1 className="m-auto py-8 mb-8 w-fit text-[2rem]">Dylan Sharp</h1>
        <div className="grid grid-cols-2 grid-rows-2 md:gap-[33.3%] w-[280px] h-[280px] md:w-[400px] md:h-[400px] xl:w-[560px] xl:h-[560px] mx-auto aspect-square">
          {cornerButtonData.map((tab, i) => (
            <CornerButton
              key={i}
              text={tab.text}
              className={tab.corner}
              isOpen={i === openedTab}
              setIsOpen={(isOpen) => {
                setOpenedTab(isOpen ? i : -1);
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}
