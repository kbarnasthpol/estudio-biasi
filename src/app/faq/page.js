import FAQPageSection from '../../components/FAQPageSection';
import CopyrightNotice from '../../components/CopyrightNotice';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export const metadata = {
  title: 'FAQ | Estudio Biasi & Asociados',
  description: 'Respuestas claras sobre consultas iniciales, modalidades, áreas de trabajo y coordinación de entrevistas.',
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-principal pt-16 md:pt-20">
      <main className="flex-1 pb-12">
        <FAQPageSection />
      </main>
      <CopyrightNotice />
      <FloatingWhatsApp />
    </div>
  );
}
