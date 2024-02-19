import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "celikdev",
  description: "Development By celikdev",
  author: "Hakan Çelik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="frontend, web development, HTML, CSS, JavaScript,react,react native, tailwindcss"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
