import TypewriterComponent from "typewriter-effect";

export const LandingText = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "Passionate <br /> Craftsmanship,",
          "Where <span style='background: #ffce20;'>Beauty</span> <br /> <span style='background: #ffce20;'>Meets</span> Simplicity.",
        ],
        autoStart: true,
        loop: true,
        delay: 85,
      }}
    />
  );
};
