import React, { PropsWithChildren } from "react";
import { Agency } from "../../model/agency";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  agency?: Agency;
}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header />
      <main style={{}}>{children}</main>
      <Footer />
    </>
  );
}
