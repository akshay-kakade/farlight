import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorner";
import Button from "./Button";

const Story = () => {
  const FrameRef = useRef("null");

  return (
    <section id="event" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <h1 className="font-general text-sm uppercase md:text-[10px]">
          {" "}
          
          
        </h1>
        <div className="relative size-full ">
          <AnimatedTitle
            title="<b>Farlight 84: Galactic Gala <br/> An Interstellar Celebration</b>"
            sectionId="#story"
            containerClass="m-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={FrameRef}
                  src="img/entrance.webp"
                  alt="entrance"
                  className="object-contai"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
            Prepare for an unforgettable night! The Galactic Gala descends upon
             Farlight 84, bringing exclusive rewards, dazzling new skins,
              and thrilling limited-time events. Join the interstellar celebration and show off your cosmic style!
            </p>

          <a href="https://farlight84.farlightgames.com/news-detail.html?id=270" target="_blank">   <Button
              id="realm-btn"
              title="discover more"
              containerClass="mt-5"
            /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
