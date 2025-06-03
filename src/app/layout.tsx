import "./globals.css";
import { Inter, Inria_Serif } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
});

export const metadata = {
  title: "UCR Katipunan PSO",
  description:
    "Katipunan PSO is a cultural organization at the University of California, Riverside that aims to enrich the understanding and appreciation of Filipino culture.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-kpso-white ${inter.variable} ${inria_serif.variable}`}
      >
        <ReactQueryClientProvider>
          <Navbar />
          <div className="m-18" />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
