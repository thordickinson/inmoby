import { PropsWithChildren, CSSProperties } from "react";

interface CardHeaderProps {
  title: string;
}

const headerStyle: CSSProperties = {};

export default function CardHeader({
  title,
  children,
}: PropsWithChildren<CardHeaderProps>) {
  return (
    <div style={headerStyle}>
      <div className="flex flex-row flex-nowrap pb-7 mb-5 border-solid border-b border-gray-200">
        <h2 className="text-lg grow">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
