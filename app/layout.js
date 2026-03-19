export const metadata = {
  title: "Yayo — Product Owner & Designer Portfolio",
  description: "Chat with Yayo's AI to learn about his experience, projects, and skills. Product Owner & Designer with 8+ years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>{children}</body>
    </html>
  );
}
