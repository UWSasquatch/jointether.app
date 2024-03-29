import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tether",
  description: "The shared space for your relationship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=6476932587" />
      </head>
      <body className={`flex min-h-screen flex-col ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
