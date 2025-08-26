import "./globals.css";
import Sidebar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main style={{ marginLeft: "250px", padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
