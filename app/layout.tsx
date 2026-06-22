import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kshitij Choubey | DevOps & Automation Engineer",
  description:
    "Portfolio of Kshitij Choubey — DevOps and Automation Engineer specializing in hybrid cloud, IaC, GitOps, and Linux infrastructure across Azure and AWS.",
  keywords: [
    "DevOps",
    "Automation",
    "Kubernetes",
    "Terraform",
    "Azure",
    "AWS",
    "Kshitij Choubey",
  ],
  authors: [{ name: "Kshitij Choubey" }],
  openGraph: {
    title: "Kshitij Choubey | DevOps & Automation Engineer",
    description:
      "DevOps and Automation Engineer with 4.9 years of experience in hybrid cloud, IaC, and GitOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
