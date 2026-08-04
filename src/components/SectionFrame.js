export default function SectionFrame({ children, className = "" }) {
  return (
    <div
      className={` overflow-hidden  border border-principal/15 bg-secundario/95 shadow-[0_30px_80px_rgba(2,82,89,0.16)] ${className}`}
    >
      {children}
    </div>
  );
}
