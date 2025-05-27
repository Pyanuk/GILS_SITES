"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "./CardPage.css";


import cardIcon from "../../images/card.svg";
import homeIcon from "../../images/Home2.svg";
import unionIcon from "../../images/Union.svg";
import profIcon from "../../images/telegram-cloud-photo-size-2-5418192490940464239-y.svg";
import deckIcon from "../../images/Union3.svg";
import flykIcon from "../../images/Union33.svg";
import palochkakIcon from "../../images/Vector 3145.svg";
import fonkIcon from "../../images/Frame 1216.jpg";
import volumeIcon from "../../images/Low Volume.svg";
import shareRoundedIcon from "../../images/Share Rounded.svg";

export default function CardPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return; 
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = () => {
    const card = cardRef.current;
    if (!card) return; 
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col items-center justify-between p-8 overflow-hidden font-bold rounded-[0px]">
      <div className="relative h-[630px] w-[1490px] bg-[#0F0F0F] rounded-[0px] p-8 overflow-auto backdrop-blur-lg flex flex-col items-center mt-[1px] hide-scrollbar">
        <Image
          src={fonkIcon}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        
        <div className="absolute top-4 right-4 z-10 flex gap-4">
          <div className="w-10 h-10 bg-[#1F1F1F] rounded-full flex items-center justify-center hover:bg-[#333] cursor-pointer">
            <Image src={volumeIcon} alt="Volume" width={20} height={20} />
          </div>
          <div className="w-10 h-10 bg-[#1F1F1F] rounded-full flex items-center justify-center hover:bg-[#333] cursor-pointer">
            <Image src={shareRoundedIcon} alt="Share" width={20} height={20} />
          </div>
        </div>

        
        <div className="relative z-10 w-full max-w-[1400px]">
         
          <div className="absolute" style={{ top: "300px", left: "80px" }}>
            <div className="flex flex-col text-left font-bold text-white text-[18px] leading-[1.3] opacity-30" style={{ fontFamily: "Consolas, monospace" }}>
              <p>Нажми пробел, чтобы</p>
              <p>Активировать пропуск</p>
            </div>
          </div>

          
          <div
            className="absolute"
            style={{ top: "50px", left: "580px" }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
          >
            <div className="ticket-content ticket specular">
              <Image src={cardIcon} alt="Card Icon" width={250} height={90} />
            </div>
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <nav className="bg-[#3030304D] backdrop-blur-lg backdrop-blur-xl rounded-full px-4 py-1.5 flex items-center gap-6 shadow-xl">
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={homeIcon} alt="Home" width={30} height={30} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={palochkakIcon} alt="Line" width={4} height={4} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={unionIcon} alt="Union" width={30} height={30} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={deckIcon} alt="Deck" width={50} height={40} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={flykIcon} alt="Flyk" width={30} height={30} />
          </a>
        </nav>
        <a href="#" className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
            <Image src={profIcon} alt="Profile" width={30} height={30} />
          </div>
        </a>
      </div>
    </div>
  );
}