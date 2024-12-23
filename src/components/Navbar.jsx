import { useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { TfiGame } from "react-icons/tfi";

const navItems = ["Home", "Characters", "Event", "About", "Contact"];
const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNaveVisible, setIsNaveVisible] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const musicTracks = useMemo(
    () => ["/audio/loop1.mp4", "/audio/loop3.mp4", "/audio/loop2.m4a"],
    [],
  );

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNaveVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNaveVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNaveVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNaveVisible ? 0 : -100,
      opacity: isNaveVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNaveVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const handleEnded = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicTracks.length);
    };

    const audioElement = audioElementRef.current;
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [musicTracks.length]);

  useEffect(() => {
    const audioElement = audioElementRef.current;
    if (audioElement) {
      audioElement.src = musicTracks[currentTrackIndex];
      if (isAudioPlaying) {
        audioElement.play();
      }
    }
  }, [currentTrackIndex, musicTracks, isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0.5 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
<nav className="flex size-full items-center justify-between p-4 rounded bg-white bg-opacity-20">
          <div className="flex items-center gap-7">
            <img src="/img/Logo2.png" alt="logo" className="w-10" />

          <a>  <Button
              id="More about developer"
              title="Farlight Games"
              rightIcon={<TfiGame />}
              containerClass="bg-blue-100 md:flex hidden items-center justify-center gap-1"/>
                 </a>
          </div>

          <div className="flex h-full items-center">
            <div className="sm:block hidden hover:text-amber-200">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef} className="hidden" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
