import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) 
      rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {};

  return (
    <div
      id="prologue"
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full" >
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52" id="characters">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <h2 className=" font-circular-web text-lg text-blue-50">
            Into the Unreal World of Farlight 84.
          </h2>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a dynamic and ever-evolving 
          universe where players from all over the world converge
           into an interconnected battle royale experience.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflowth-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>Dynamic Change</b>
              </>
            }
            description="A revolutionary cross-platform Farlight app, transforming your adventures across Web2 & Web3 games into an epic, rewarding journey."
          />
        </BentoTilt>

        <div className="grid h-fit grid-cols-2 grid-rows-7 gap-7 object-cover">
          <BentoTilt className="bento-tilt_1 overflow-hidden row-span-1 md:col-span-1 text- md:row-span-2">
            <BentoCard
              src="videos/feature-10.mp4"
              title={
                <>
                  MK.R
                </>
              }
              description="MK.R is an Role Icon Attack Attack Capsuler who excels at quickly eliminating enemies and controlling the battlefield."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  YONG
                </>
              }
            description="Yong is a Scout Capsuler that can track opponent's movements and chase them down with superior mobility"    />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 row-span-2 w-[75dvh] md:col-span-1 md:me-0 object-cover">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                 Lucinda
                </>
              }
              description="Lucinda is an Role Icon Attack Attack Capsuler whose kit is centered around controlling areas and making it easier to hit shots."      />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-32 object-cover w-[66dvh] row-span-2 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-6.mp4"
              title={
                <>
                 Maggie
                </>
              }
              description="Maggie is an Role Icon Attack Attack Capsuler who's fast and has a kit centered around getting close and in your face."            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-32 h-full md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-7.mp4"
              title={
                <>
                Ducksyde
                </>
              }
              description="Ducksyde is a Role Icon Defense Defense Capsuler whose kit is great for one on one battles. He utilizes his shields and smokes to survive and confuse."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-32 h-full md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-8.mp4"
              title={
                <>
             Ceanna
                </>
              }
              description="Ceanna is a Role Icon Support Support Capsuler whose kit heals teammates by using her drones and veterinarian knowledge."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 overflow-hidden row-span-1 md:col-span-1 text- md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Maychelle
                </>
              }
              description="Maychelle can tell the enemy's location by listening through her headphones when spotted by the enemy."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 ms-32 md:col-span-1 h-[35dvh] md:ms-0">
            <BentoCard
              src="videos/feature-5.mp4"
              title={
                <>
                Beau
                </>
              }
              description="This character is considered the best Attack class character due to its versatility with its physical attributes in the game."
              className="object-cover"
            />
          </BentoTilt>
         
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-9.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
              title={
                <>
                Maychelle
                </>
              }
            />
          </BentoTilt>
   
        
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>ORE</b> C<b>OMING SO</b>ON!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

