import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quiz App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-quicksand font-semibold antialiased" style={{ height: "100vh", height: "100dvh" }}>
        {children}
      </body>
    </html>
  );
}
