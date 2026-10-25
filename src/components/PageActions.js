import Link from "next/link";

export default function PageActions({
  backHref,
  backLabel,
  contactHref = "/#contacto",
  contactLabel = "Consultar",
  variant = "default",
}) {
  const navClassName =
    variant === "overlay"
      ? "absolute inset-x-4 top-4 z-20 flex flex-col items-stretch justify-between gap-3 sm:inset-x-6 sm:flex-row sm:items-center"
      : variant === "embedded"
        ? "mb-8 flex w-full flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center"
        : "mx-auto mb-6 flex w-full max-w-7xl flex-col items-stretch justify-between gap-3 px-0 sm:flex-row sm:items-center lg:px-2";

  const backButtonClassName =
    variant === "overlay"
      ? "inline-flex items-center gap-2 border border-principal/30 bg-secundario/75 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-principal backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-principal/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal md:text-sm"
      : "inline-flex items-center gap-2 border border-secundario/20 bg-principal px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:border-secundario/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secundario md:text-sm";

  return (
    <nav
      aria-label="Navegación de la página"
      className={navClassName}
    >
      <Link
        href={backHref}
        className={backButtonClassName}
      >
        <i aria-hidden="true" className="fas fa-arrow-left text-xs" />
        {backLabel}
      </Link>
      <Link
        href={contactHref}
        className="inline-flex items-center justify-center gap-2 border border-detalles bg-detalles px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detalles md:text-sm"
      >
        {contactLabel}
        <i aria-hidden="true" className="fas fa-arrow-right text-xs" />
      </Link>
    </nav>
  );
}
