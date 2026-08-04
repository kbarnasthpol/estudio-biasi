import { notFound } from 'next/navigation';
import ServiceDetailPage from '../../../components/ServiceDetailPage';
import { areasData } from '../../../data/areas';

export async function generateStaticParams() {
  return areasData.map((area) => ({ slug: area.id }));
}

export function generateMetadata({ params }) {
  const slug = params?.slug;
  const area = areasData.find((item) => item.id === slug);

  if (!area) {
    return {
      title: 'Servicio no encontrado | Estudio Biasi & Asociados',
      description: 'El servicio solicitado no existe.',
    };
  }

  return {
    title: `${area.nombre} | Estudio Biasi & Asociados`,
    description: area.descripcion,
  };
}

export default async function ServiceSlugPage({ params }) {
  const slug = params?.slug;
  const area = areasData.find((item) => item.id === slug);

  if (!area) return notFound();

  return <ServiceDetailPage area={area} />;
}
