import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const funky1 = localFont({
    src: '../../public/fonts/funky-font-1.ttf',
    variable: "--font-primary"
});

const funky2 = localFont({
    src: '../../public/fonts/funky-font-2.otf',
    variable: "--font-secondary"
});


export const metadata: Metadata = {
  title: "Portafolio Website",
  description: "Personal project sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${funky1.variable} ${funky2.variable}`}
              >
        {children}
      </body>
    </html>
  );
}
