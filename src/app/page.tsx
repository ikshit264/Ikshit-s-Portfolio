'use client'
import RightClicked from "@/Components/common/RightClicked";
import Screensaver from "@/Components/common/TaskBar/ScreenSaver";
import ParentComponent from "@/Components/ParentComponent";
import { useStateManagement } from "@/hooks/StateContext";
import { useState, useEffect } from "react";

export default function Home() {
  const { IsPhone } = useStateManagement();
  const [isRightClicker, setisRightClicker] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [imgIndex, setimgIndex] = useState<number>(2);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickPosition({ x: e.pageX, y: e.pageY });
    setisRightClicker(true);
  };

  // Fixing the recursive issue: generating a new index different from the previous one
  function generateRandomNumber(previousIndex: number): number {
    let generatedNumber = Math.floor(Math.random() * 100);
    while (generatedNumber % 8 === previousIndex) {
      return generatedNumber + 1; // keep generating until it's different
    }
    return generatedNumber;
  }

  const ChangeBackground = () => {
    let newIndex = generateRandomNumber(imgIndex) % 8 + 1;
    if (newIndex !== imgIndex) (newIndex+1)%8+1
    setimgIndex(newIndex);
  };

  useEffect(() => {
    const handleClick = () => {
      setisRightClicker(false);
    };

    if (isRightClicker) {
      window.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isRightClicker]);

  return (
    <div className="overflow-hidden"
      onContextMenu={handleRightClick}
      style={{
        backgroundImage: `url('/bg_img/bg_img${imgIndex}.jpg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}>
      <ParentComponent />
      <div>
        {isRightClicker && !IsPhone && (
          <RightClicked position={clickPosition} ChangeBackground={ChangeBackground} />
        )}
      </div>
      {!IsPhone && <Screensaver />}
    </div>
  );
}
