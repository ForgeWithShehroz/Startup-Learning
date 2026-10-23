import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'], // Select the weights you need
  subsets: ['latin'],            // Specify subsets
  display: 'swap',               // Ensure fast initial rendering
  variable: '--font-roboto',     // Define a CSS variable name
});


export const metadata = {
  title: "Bittree - Your favorite link sharing site",
  description: "We brought a revolution in link sharing",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  font-linksans">
         <Navbar />
        {children}
        </body>
    </html>
  );
}
