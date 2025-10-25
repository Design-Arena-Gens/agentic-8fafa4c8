import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premier Home Remodeling | Transform Your Space",
  description: "Professional home remodeling services for kitchens, bathrooms, and complete renovations. Quality craftsmanship, exceptional results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
