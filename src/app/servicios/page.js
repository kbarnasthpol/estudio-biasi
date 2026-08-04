import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Servicios | Estudio Biasi & Asociados',
  description: 'Explorá las áreas de especialización del estudio y accedé a una visión más amplia de cada servicio jurídico.',
};

export default function ServiciosPage() {
  redirect('/#areas-especializacion');
}
