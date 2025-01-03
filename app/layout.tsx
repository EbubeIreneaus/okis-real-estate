
import "./globals.css";
import "./style.css";

import { Metadata } from "next";

const title =
  "OKI'S Real Estate, Building Construction & Renovation - Property Management Firm";
export const metadata: Metadata = {
  title: title,
  authors: [
    { name: "Amos Ekene" },
    { name: "Okigwe Ebube Ireneaus", url: "https://ebustech.netlify.app" },
  ],
  creator: "Okigwe Ebube Ireneaus<ebubeireneaus7@gmail.com>",
  description:
    "OKI's Real Estate: Experts in buying, selling, building construction, renovation, and property management. Comprehensive real estate solutions you can trust.",
  openGraph: {
    title: title,
    description:
      "OKI's Real Estate: Experts in buying, selling, building construction, renovation, and property management. Comprehensive real estate solutions you can trust.",
    type: "website",
    url: "https://okis-real-estate.vercel.app",
    siteName: "OKIS Real Estate",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {


  return (
    <html lang="en">
      <body className="bg-base-100 max-w-[100vw] w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
