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
      <body className="antialiased p-4">
        <header className="mb-2 flex">
          <div>
            <h1 className="text-2xl font-bold"> Magigliere </h1>
            <p> A Harry Potter hub </p>
          </div>
          <Navbar />
        </header>
        <hr className="mb-3" />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
