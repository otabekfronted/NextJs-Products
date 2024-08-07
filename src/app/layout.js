// import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google"; // Import to'g'ri
import "./globals.css"; // CSS fayl yo'li

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <Navbar /> Navbar komponenti */}
                <main>{children}</main> {/* Dastur mazmuni */}
            </body>
        </html>
    );
}
