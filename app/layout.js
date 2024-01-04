import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import DataProvider from "./data-provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Peoployed | CV Generator",
  description: "CV Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} ${poppins.variable}`}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
