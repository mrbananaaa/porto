type SectionParagraphProps = {
  text: string;
};

export const SectionParagraph = ({ text }: SectionParagraphProps) => {
  return (
    <p className="font-paragraph text-fg-sec text-sm md:text-lg max-w-2xl">
      {text}
    </p>
  );
};

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h3 className="w-full font-head-main font-medium text-fg-main text-3xl md:text-5xl underline underline-offset-3 decoration-accent/60 decoration-2 selection:text-fg-main selection:bg-accent">
      {title}
    </h3>
  );
};
