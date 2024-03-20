import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-1 flex-row items-stretch justify-center">
      <main className="flex max-w-[1024px] flex-1 flex-col items-stretch gap-8 px-8 py-16">
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
        <div className="flex flex-1 flex-col justify-center gap-6">
          <h2 className="text-5xl">Contact us</h2>
          <p className="text-xl">See a bug? Have a suggestion?</p>
          <p className="text-3xl">
            Email us at{" "}
            <a className="underline" href="mailto:support@jointether.app">
              support@jointether.app
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
