import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Estudio Biasi & Asociados',
  description: 'Asesoramiento legal integral y representación especializada.',
};

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
      <body className="antialiased pt-[68px] ">
        <Header />
        <main className="bg-absolute bg-gradient-to-br from-principal to-detalles/70">
          {children}
        </main>
      </body>
    </html>
  );
}