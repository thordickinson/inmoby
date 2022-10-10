import { PropsWithChildren } from "react";
export default function Card({ children }: PropsWithChildren) {
  return <div className="rounded bg-white p-5">{children}</div>;
}
