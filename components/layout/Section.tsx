import { PropsWithChildren } from "react";

interface SectionProps {
  bgColor?: string;
}

export default function Section({
  children,
  bgColor,
}: PropsWithChildren<SectionProps>) {
  const backgroundColor = bgColor || "transparent";
  return (
    <div className="w-full" style={{ backgroundColor }}>
      <div className="content">{children}</div>
    </div>
  );
}
