import { LineBreak } from "@/components/common/line-break";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { SectionParagraph, SectionTitle } from "@/components/common/typography";
import { LandingText } from "@/components/common/landing-text";
import textLogo from "@/assets/logo-text.svg";

const PLATFORM_SECTION = [
  [
    "Frontend",
    [
      "React ecosystem (Vite, React Query, React Router)",
      "Tailwind CSS",
      "Nest JS",
    ],
  ],
  [
    "Backend",
    [
      "Golang, Node.js, Bun",
      "Typed SQL workflow w/ sqlc in golang, and drizzle in Node.js/bun",
      "Postgresql since day one",
    ],
  ],
  [
    "Infrastructure",
    [
      "Real-time apps w/ Websocket scaling",
      "Redis Pub/Sub + Horizontal scaling",
      "API design w/ Typed, Secure data flow",
    ],
  ],
] as const;

const SkillSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-7xl">
      {PLATFORM_SECTION.map(([title, list], i) => (
        <div key={i} className="flex flex-col space-y-4">
          <div className="font-head-main font-medium text-fg-main text-xl md:text-2xl">
            {title}
          </div>
          <ul className="list-disc ml-6 font-paragraph text-fg-sec text-sm md:text-lg max-w-sm">
            {list.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const CONTACT_LIST = [
  ["Github", "https://github.com/mrbananaaa"],
  ["Instagram", "https://www.instagram.com/mr.bananaaa69"],
  ["Whatsapp", "https://wa.me/message/NCWEAPJES7FVK1"],
];

const ContactSection = () => {
  return (
    <div className="flex items-center space-x-4">
      {CONTACT_LIST.map(([title, link], i) => (
        <>
          <a
            key={i}
            href={link}
            target="_blank"
            className="font-paragraph text-fg-sec text-sm hover:text-blue-500"
          >
            {title}
          </a>
          {i < CONTACT_LIST.length - 1 ? (
            <span className="cursor-default">•</span>
          ) : null}
        </>
      ))}
    </div>
  );
};

const LandingRoute = () => {
  return (
    <>
      <Section sectionID="">
        <div className="flex flex-col space-y-2">
          <div className="relative min-w-[80svw]">
            <h1 className="flex flex-col font-head-main font-semibold text-fg-main text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[160px] min-h-28 md:min-h-44 lg:min-h-56 xl:min-h-72 tracking-tighter">
              <LandingText />
            </h1>
            <div className="absolute -top-20 right-0">
              <img
                src={textLogo}
                alt=""
                className="animate-logo-spin"
                width={120}
                height={120}
              />
            </div>
          </div>
          <p className="font-paragraph font-light italic text-fg-sec text-xs md:text-xl">
            ~ <span className="text-accent">mr.bananaaaa</span> with a couple of
            ChatGPT prompt.
          </p>
        </div>
      </Section>
      <LineBreak />
      <Section sectionID="about">
        <div className="flex flex-col space-y-8">
          <div className="font-head-sec font-medium text-2xl md:text-6xl lg:text-5xl max-w-3xl leading-snug">
            <span className="text-accent">Full-Stack Engineer</span> focused on
            systems, typed queries, and{" "}
            <span className="text-accent">scalable architectures</span>.
          </div>
          <SectionParagraph
            text="I design clean APIs, architect real-time infrastructures, and prefer
            predictable data flow end to end."
          />
        </div>
      </Section>
      <LineBreak />
      <Section sectionID="skill">
        <div className="flex flex-col space-y-14 py-12">
          <div className="flex flex-col space-y-6">
            <h4 className="font-head-sec text-accent text-xl md:text-2xl">
              What I Do
            </h4>
            <SectionTitle title="Platform & Systems I Build on" />
          </div>
          <SkillSection />
          <SectionParagraph
            text="I prefer explicit over magic; structure and typed data over
            unpredictable orms."
          />
        </div>
      </Section>
      <LineBreak />
      <Section sectionID="showcase">
        <div className="flex flex-col space-y-10 w-full">
          <SectionTitle title="Selected Works" />
          <div className="bg-gray-300 flex justify-center items-center h-[60svh] rounded-2xl">
            <span className="font-head-main font-medium text-fg-sec">
              Comin Soon, Stay tuned!
            </span>
          </div>
        </div>
      </Section>
      <LineBreak />
      <Section sectionID="contact">
        <div className="w-full flex flex-col space-y-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-col space-y-4">
              <SectionTitle title="Let's Build Something Together." />
              <SectionParagraph
                text="If you’re working on systems that require clarity, reliability,
                or real-time architecture - let’s talk."
              />
            </div>
          </div>
          <div className="font-head-main flex flex-col justify-center space-y-6">
            <div className="flex justify-center">
              <div className="flex justify-center items-center space-x-4">
                <Button
                  size="lg"
                  className="min-w-40 min-h-14 cursor-pointer bg-accent text-white hover:bg-[#E5B715] border border-[#FEE17B]"
                >
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-40 min-h-14 text-fg-main hover:text-white cursor-pointer"
                >
                  View Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ContactSection />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default LandingRoute;
