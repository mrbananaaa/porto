import { LineBreak } from "@/components/common/line-break";
import { Button } from "@/components/ui/button";

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
          <div className="font-head-main font-medium text-fg-main text-[30px]">
            {title}
          </div>
          <ul className="list-disc ml-6 font-paragraph text-fg-sec text-xl">
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
        <a
          key={i}
          href={link}
          target="_blank"
          className="font-paragraph text-fg-sec text-sm hover:text-blue-500"
        >
          {title}
        </a>
      ))}
    </div>
  );
};

const LandingRoute = () => {
  return (
    <>
      <section className="flex py-5 md:py-52">
        <div className="flex flex-col space-y-2">
          <h1 className="flex flex-col font-head-main font-semibold text-4xl text-fg-main md:text-6xl lg:text-[160px]">
            <span>Passionate</span>
            <span>Craftsmanship,</span>
          </h1>
          <p className="font-paragraph font-light italic text-fg-sec text-xs md:text-xl">
            ~ <span className="text-accent">mr.bananaaaa</span> with a couple of
            ChatGPT prompt.
          </p>
        </div>
      </section>
      <LineBreak />
      <section className="flex flex-col space-y-8 md:py-52">
        <div className="font-head-sec font-medium lg:text-[65px] max-w-6xl leading-snug">
          <span className="text-accent">Full-Stack Engineer</span> focused on
          systems, typed queries, and{" "}
          <span className="text-accent">scalable architectures</span>.
        </div>
        <p className="font-paragraph text-fg-sec text-xl max-w-3xl">
          I design clean APIs, architect real-time infrastructures, and prefer
          predictable data flow end to end.
        </p>
      </section>
      <LineBreak />
      <section className="flex flex-col md:py-52 space-y-10">
        <div className="flex flex-col space-y-6">
          <div className="font-head-sec text-accent text-[35px]">What I Do</div>
          <div className="font-head-main font-medium text-fg-main lg:text-[65px] underline underline-offset-3 decoration-accent/60">
            Platform & Systems I Build on
          </div>
        </div>
        <SkillSection />
        <p className="font-paragraph text-fg-sec text-xl max-w-3xl">
          I prefer explicit over magic; structure and typed data over
          unpredictable orms.
        </p>
      </section>
      <LineBreak />
      <section className="flex flex-col md:py-28 space-y-10">
        <div className="font-head-main font-medium text-fg-main lg:text-[65px] underline underline-offset-3 decoration-accent/60">
          Selected Works
        </div>
        <div className="bg-gray-300 flex justify-center items-center h-[60svh] rounded-2xl">
          <span className="font-head-main font-medium text-fg-sec">
            Comin Soon, Stay tuned!
          </span>
        </div>
      </section>
      <LineBreak />
      <section className="flex flex-col md:py-52 space-y-8">
        <div className="flex flex-col items-center">
          <div>
            <div className="font-head-main font-medium text-fg-main lg:text-[65px] underline underline-offset-3 decoration-accent/60">
              Let's Build Something Together.
            </div>
            <p className="font-paragraph text-fg-sec text-2xl max-w-3xl">
              If you’re working on systems that require clarity, reliability, or
              real-time architecture - let’s talk.
            </p>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default LandingRoute;
