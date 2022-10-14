import { PropsWithChildren } from "react";
import AgencyBaseLayout from "./AgencyBaseLayout";
import Footer from "./Footer";
export default function AgencyLayout({ children }: PropsWithChildren) {
  return (
    <AgencyBaseLayout>
      {children}
      <Footer></Footer>
    </AgencyBaseLayout>
  );
}
