export default function CopyrightNotice() {
  return (
    <footer className=" bg-secundario px-6 py-12 text-center">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-principal/55">
          Berisso · Buenos Aires
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-principal/45">
          © {new Date().getFullYear()}{" "}Biasi &amp; Asociados · Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
