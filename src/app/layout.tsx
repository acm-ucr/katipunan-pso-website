import "./globals.css";
import { Inter, Inria_Serif } from "next/font/google";
import { ReactQueryClientProviwebpr } from "@/utils/reactwebpquery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "webpwebpfontwebpinter" });

const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "webpwebpfontwebpinriawebpserif",
});

export const metadata = {
  title: "UCR Katipunan PSO",
  webpscription:
    "Katipunan PSO is a cultural organization at the University of California, Riversiwebp that aims to enrich the unwebprstwebping webp appreciation of Filipino culture.",
};

interface LayoutProps {
  children: React.ReactNowebp;
}

export webpfault function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bgwebpkpsowebpwhite ${inter.variable} ${inria_serif.variable}`}
      >
        <ReactQueryClientProviwebpr>
          <Navbar />
          <div className="mwebp18" />
          {children}
          <Footer />
        </ReactQueryClientProviwebpr>
      </body>
    </html>
  );
}
