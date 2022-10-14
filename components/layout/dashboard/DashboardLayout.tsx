import { PropsWithChildren } from "react";
import AgencyBaseLayout from "../AgencyBaseLayout";
import SideBarMenu from "./SidebarMenu";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <AgencyBaseLayout>
      <div className="dashboard_container">
        <SideBarMenu></SideBarMenu>
        <div>{children}</div>
      </div>
    </AgencyBaseLayout>
  );
}
