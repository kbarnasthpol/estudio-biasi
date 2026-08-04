import './globals.css';
import Header from '../components/Header';
import { Playfair_Display, Inter } from "next/font/google";

export const metadata = {
  title: 'Estudio Biasi & Asociados | Asesoramiento Jurídico Integral',
  description: 'Estudio Biasi & Asociados ofrece asesoramiento jurídico integral en Derecho Laboral, Penal, Familia, Civil y Comercial, Derecho Animal y Seguridad Pública.',
  keywords: ['abogados', 'asesoramiento jurídico', 'derecho laboral', 'derecho penal', 'derecho familia', 'la plata', 'estudio jurídico'],
  alternates: {
    canonical: 'https://estudio-biasi.vercel.app/'
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Cargamos Font Awesome de forma nativa y optimizada */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
      </head>
      <body
  className={`
    ${inter.variable}
    ${playfair.variable}
    antialiased
  `}
>
        <Header />
        <main className="bg-principal">
          {children}
        </main>
      </body>
    </html>
  );
}