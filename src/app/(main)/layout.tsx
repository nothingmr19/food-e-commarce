import { Fragment, ReactNode } from "react";
import { Navbar } from "@/components/global";
import { FooterPage } from "@/components/global/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: RootLayoutProps) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <FooterPage />
    </Fragment>
  );
}
