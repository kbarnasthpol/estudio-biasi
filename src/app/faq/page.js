import Link from 'next/link';
import FAQPageSection from '../../components/FAQPageSection';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export const metadata = {
  title: 'FAQ | Estudio Biasi & Asociados',
  description: 'Respuestas claras sobre consultas iniciales, modalidades, áreas de trabajo y coordinación de entrevistas.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-principal pt-24">
      <div className="mx-auto mb-6 flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="inline-flex items-center rounded-full border border-secundario/15 bg-principal px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5">
          Volver al inicio
        </Link>
        <a href="/#contacto" className="inline-flex items-center rounded-full border border-detalles bg-detalles px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5">
          Consultar
        </a>
      </div>
      <main className="pb-16">
        <FAQPageSection />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
