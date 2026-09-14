import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creonaile Ramos | Psicología Sanitaria",
  description:
    "Psicología sanitaria, acompañamiento emocional, trauma, EMDR, mayores, memoria y demencias. Atención presencial y online.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
