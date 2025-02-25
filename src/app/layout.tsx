import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import Link from "next/link";

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
      <body className={"antialiased"}>
        <h1> Magigliere </h1>
        <p> A Harry Potter hub </p>
        <nav>
          <Link href={"/"}> Home </Link>
          <Link href={"/characters"}> Characters </Link>
          <Link href={"/profile"}> My profile </Link>
        </nav>
        <hr />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
