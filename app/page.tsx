import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-between gap-10 py-8 pl-8 pr-8 sm:gap-24 sm:pr-[62px]">
      <main className="flex flex-1 flex-row flex-wrap items-center justify-center gap-4 sm:gap-24">
        <header className="flex flex-col items-center gap-16 sm:items-start">
          <div className="flex flex-col gap-12 sm:gap-8">
            <div className="flex flex-row items-center">
              <div className="flex flex-1 items-center gap-2 sm:gap-8">
                <h1 className="text-[24px] leading-none sm:text-[80px]">
                  Tether
                </h1>
                <div className="relative h-[24px] w-[24px] sm:h-[96px] sm:w-[96px]">
                  <Image
                    src="/logo.png"
                    className="rounded-md sm:rounded-2xl"
                    alt="Tether logo"
                    fill
                  />
                </div>
              </div>
              <div className="relative block h-[24px] w-[72px] sm:hidden">
                <Image src="/images/badge.png" alt="App Store" fill />
              </div>
            </div>
            <p className="text-center text-4xl sm:text-left sm:text-2xl">
              The shared space for your relationship.
            </p>
          </div>
          <div className="relative hidden h-[64px] w-[192px] sm:block">
            <Image src="/images/badge.png" alt="App Store" fill />
          </div>
        </header>
        <div className="flex flex-col gap-4 sm:relative sm:h-[534px] sm:w-[304px]">
          <div className="relative hidden h-[474px] w-[224px] sm:absolute sm:-bottom-[60px] sm:-left-[40px] sm:block">
            <Image src="/images/map.png" alt="Phone showing map" fill />
          </div>
          <div className="relative h-[474px] w-[224px] sm:absolute sm:-right-[40px] sm:top-[10px]">
            <Image
              src="/images/feed.png"
              alt="Phone showing conversation"
              fill
            />
          </div>
        </div>
      </main>
      <footer className="text-sm">
        <Link href="/privacy-policy" className="">
          Privacy policy
        </Link>
        {" • "}
        <Link href="/terms-of-service" className="">
          Terms of service
        </Link>
        {" • "}
        <Link href="/contact" className="">
          Contact
        </Link>
      </footer>
    </div>
  );
};

export default Home;
