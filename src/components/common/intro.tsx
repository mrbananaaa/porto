import { useEffect, useState } from "react";

interface IntroProps {
  onFinish: () => void;
}

export const Intro = ({ onFinish }: IntroProps) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 2000);

    const remove = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onFinish]);

  return (
    <div
      className={`inset-0 w-svw h-svh bg-transparent flex items-center justify-center z-50 transition-opacity duration-[2000] ${
        exit ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute w-svw h-svh z-20 bg-accent animate-bacground-shrink"></div>
      <div className="z-30 w-0 h-0 bg-accent rounded-full bg-center bg-no-repeat bg-cover delay-100 ease-[cubic-bezier(0, 0.42, 0.15, 0.99)] animate-logo-transition"></div>
    </div>
  );
};
