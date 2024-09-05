"use client";
import React, { useState } from "react";

const Button = ({ value, onClick }) => {
  const backgroundColors = {
    0: "rgb(181, 180, 180)",
    1: "rgb(181, 180, 180)",
    2: "rgb(181, 180, 180)",
    3: "#ffa700",
    4: "#3e3c3c",
    5: "#3e3c3c",
    6: "#3e3c3c",
    7: "#ffa700",
    8: "#3e3c3c",
    9: "#3e3c3c",
    10: "#3e3c3c",
    11: "#ffa700",
    12: "#3e3c3c",
    13: "#3e3c3c",
    14: "#3e3c3c",
    15: "#ffa700",
    16: "#3e3c3c",
    17: "#ffa700",
    18: "#ffa700",
  };

  const textColors = {
    0: "#000",
    1: "#000",
    2: "#000",
    default: "#fff",
  };

  const labels = {
    0: "C",
    1: (
      <div>
        <span>+</span>
        <span>/</span>
        <span>-</span>
      </div>
    ),
    2: "%",
    3: (
      <div className="h-[20px] w-[20px]">
        <img
          width="30"
          height="30"
          className="object-contain"
          src="https://img.icons8.com/ios-glyphs/30/divide.png"
          alt="divide"
        />
      </div>
    ),
    4: "7",
    5: "8",
    6: "9",
    7: "x",
    8: "4",
    9: "5",
    10: "6",
    11: "-",
    12: "1",
    13: "2",
    14: "3",
    15: "+",
    16: "0",
    17: ".",
    18: "=",
  };

  return (
    <div
      style={{
        background: backgroundColors[value] || value,
        color: textColors[value] || textColors.default,
      }}
      className="flex justify-center items-center h-[100px] rounded-[100%] text-[20px]"
      onClick={() => onClick(value)}
    >
      {labels[value]}
    </div>
  );
};

export default function Home() {
  const [data, setData] = useState("hello data 11");
  const [text, setText] = useState("");

  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <main>
      <div className="w-[500px] flex flex-col gap-4 mx-auto bg-[#070707] h-[100vh]">
        <div className="text-[#e3e3e3] text-[40px] font-thin">Screen</div>
        <div className="grid grid-cols-4 gap-6 p-4">
          {Array.from({ length: 19 }).map((_, index) => (
            <Button key={index} value={index} onClick={handleClick} />
          ))}
        </div>
      </div>
    </main>
  );
}
