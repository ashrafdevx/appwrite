import "./globals.css";

export const metadata = {
  title: "Appwrite - App",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
