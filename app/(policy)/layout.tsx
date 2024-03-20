import Image from "next/image";
import "@/styles/policy.css";
import { ReactNode } from "react";
import Link from "next/link";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <a id="top" />
      <div className="flex flex-col items-center">
        <main className="flex max-w-[1024px] flex-col items-start gap-8 px-8 py-16">
          <Link href="/">
            <header className="flex items-center gap-4">
              <h1 className="text-[24px] leading-none">Tether</h1>
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/images/logo.png"
                  className="rounded-md"
                  alt="Tether logo"
                  fill
                />
              </div>
            </header>
          </Link>
          {children}
          <a href="#top" className="underline">
            Back to top
          </a>
        </main>
      </div>
    </>
  );
};

export default Layout;
