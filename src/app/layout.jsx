import "./globals.css";
export const metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
