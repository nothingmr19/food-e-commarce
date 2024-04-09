import { Fragment, ReactNode } from "react";
import { Navbar } from "@/components/global";

interface RootLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: RootLayoutProps) {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
}
