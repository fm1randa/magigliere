import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Magigliere",
  description: "A Harry Potter hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-4 font-sofia-pro font-bold text-base bg-dark-blue text-soft-ivory w-svw h-svh flex flex-col">
        <header className="mb-2 flex">
          <div>
            <h1 className="text-6xl font-bold font-harry-p text-golden-ochre">
              Magigliere
            </h1>
            <p className="font-harry-beast-display text-lg">
              A Harry Potter hub
            </p>
          </div>
          <Navbar />
        </header>
        <hr className="mb-3" />
        <main className="flex flex-col grow items-center">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
